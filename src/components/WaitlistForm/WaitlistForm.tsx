'use client';

import { useState } from 'react';

interface WaitlistFormProps {
  source: string;
  buttonText?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function WaitlistForm({ 
  source, 
  buttonText = 'Claim your founding spot',
  layout = 'horizontal' 
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState(''); // Honeypot field
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitMessage(null);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          nickname, // Honeypot
          source,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setSubmitMessage(data.message);
        setEmail('');
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Connection error. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const isVertical = layout === 'vertical';
    return (
      <div className={`bg-white rounded-xl flex flex-col items-center gap-3 animate-fade-in-up ${isVertical ? 'border-none p-0 shadow-none' : 'border border-emerald-500 p-6 shadow-lg'}`}>
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-2xl font-bold">✓</div>
        <div className="font-poppins text-lg font-bold text-dark">
          {isVertical ? 'Spot Claimed!' : 'Founding Spot Reserved!'}
        </div>
        <p className="text-sm text-dark-light leading-relaxed text-center">{submitMessage}</p>
      </div>
    );
  }

  const isVertical = layout === 'vertical';

  return (
    <div className="w-full">
      <form 
        onSubmit={handleSubscribe} 
        className={isVertical 
          ? "flex flex-col gap-4" 
          : "flex flex-col sm:flex-row gap-3 sm:p-2 sm:bg-white sm:border sm:border-slate-200 sm:rounded-xl sm:shadow-md bg-transparent border-none p-0 shadow-none transition-all duration-300 sm:focus-within:border-primary sm:focus-within:ring-4 sm:focus-within:ring-primary/10 sm:focus-within:shadow-lg"
        }
      >
        {/* Honeypot field for spam prevention */}
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={isVertical 
            ? "border border-slate-200 rounded-md px-4 py-3.5 bg-dark-bg w-full focus:border-primary focus:bg-white outline-none text-base text-dark"
            : "w-full sm:flex-1 px-4 py-3.5 sm:py-3 border border-slate-200 sm:border-none rounded-md sm:rounded-none bg-white sm:bg-transparent outline-none text-base text-dark placeholder-slate-400 focus:border-primary sm:focus:border-none"
          }
          required
        />
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className={`bg-primary hover:bg-primary-hover text-white font-poppins text-[15px] font-semibold px-6 py-3.5 sm:py-3 rounded-md transition-all duration-300 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto`}
        >
          {isSubmitting ? 'Securing spot...' : buttonText}
        </button>
      </form>
      {errorMessage && <p className="text-sm text-red-500 mt-2 font-medium text-center animate-fade-in">{errorMessage}</p>}
    </div>
  );
}
