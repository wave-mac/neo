import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, nickname, source = 'landing_page' } = body;

    // 1. Honeypot check for spam protection
    if (nickname && nickname.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Waitlist request recorded successfully.' });
    }

    // 2. Validate email presence & format
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, error: 'Email address is required.' }, { status: 400 });
    }

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json({ success: false, error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // 3. Sync with Kit (ConvertKit) if configured
    const kitApiKey = process.env.CONVERTKIT_API_KEY || process.env.KIT_API_KEY;
    const kitFormId = process.env.CONVERTKIT_FORM_ID || process.env.KIT_FORM_ID;

    if (kitApiKey && kitFormId) {
      try {
        const response = await fetch(`https://api.convertkit.com/v3/forms/${kitFormId}/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            api_key: kitApiKey,
            email: trimmedEmail,
            fields: {
              source: source,
            }
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error(`Kit API subscription failed with status ${response.status}:`, errText);
          return NextResponse.json({ success: false, error: 'Failed to subscribe to email service.' }, { status: 500 });
        }
      } catch (err) {
        console.error('Failed to sync subscriber to Kit:', err);
        return NextResponse.json({ success: false, error: 'Email service connection error.' }, { status: 500 });
      }
    } else {
      console.log(`[Mock Save] Lead email: ${trimmedEmail}, Source: ${source}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Welcome to the waitlist! Your founding spot is claimed.'
    });

  } catch (error) {
    console.error('API Error in waitlist:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
