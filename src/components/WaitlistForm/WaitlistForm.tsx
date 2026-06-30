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
          ? "flex flex-col gap-4 text-left" 
          : "flex flex-col sm:flex-row items-stretch gap-3 bg-transparent border-none p-0 shadow-none transition-all duration-300"
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
        
        {isVertical ? (
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-slate-200 rounded-lg px-4 py-3 bg-[#F8FAFC] w-full focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 outline-none text-sm text-dark transition-all"
              required
            />
          </div>
        ) : (
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 border border-slate-200 rounded-lg bg-white outline-none text-sm text-dark placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            required
          />
        )}
        
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className={isVertical 
            ? "bg-primary hover:bg-primary-hover text-white font-poppins text-sm font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed w-full shadow-[0_4px_14px_rgba(230,81,0,0.3)] flex items-center justify-center gap-2 hover:-translate-y-[1px]"
            : "bg-primary hover:bg-primary-hover text-white font-poppins text-sm font-semibold px-6 py-3 sm:py-3 rounded-lg transition-all duration-300 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto shadow-[0_4px_14px_rgba(230,81,0,0.2)] flex items-center justify-center gap-2 hover:-translate-y-[1px]"
          }
        >
          {isSubmitting ? 'Securing spot...' : `${buttonText} →`}
        </button>
      </form>
      
      {isVertical && (
        <span className="text-[10px] text-slate-400 font-medium tracking-wide text-center mt-3.5 block">
          Lifetime lowest pricing · Early access · Priority support
        </span>
      )}
      
      {errorMessage && <p className="text-sm text-red-500 mt-2 font-medium text-center animate-fade-in">{errorMessage}</p>}
    </div>
  );
}
