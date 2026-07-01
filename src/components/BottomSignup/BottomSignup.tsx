'use client';

import WaitlistForm from '../WaitlistForm/WaitlistForm';

export default function BottomSignup() {
  return (
    <section id="bottom-signup" className="py-20 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-[24px] sm:rounded-[32px] shadow-premium overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
          {/* Left Column (White Background) */}
          <div className="p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
            <h2 className="font-museo text-dark text-3xl sm:text-[34px] leading-[1.15] font-black mb-4 text-center md:text-left">
              Become a founding member
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mb-8 font-normal text-center md:text-left">
              We&apos;re building this with creators, coaches, and educators who are tired of stitching their teaching across five tools and watching students fall through the gaps.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0 w-full">
              <div className="flex items-center gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#FFF3E0] flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.2L3.5 6.7L9 1.2" stroke="#E65100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">
                  Founding-member pricing, locked in for life
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#FFF3E0] flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.2L3.5 6.7L9 1.2" stroke="#E65100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">
                  Early access before we launch
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#FFF3E0] flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.2L3.5 6.7L9 1.2" stroke="#E65100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">
                  A real say in what we build next
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#FFF3E0] flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.2L3.5 6.7L9 1.2" stroke="#E65100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">
                  Priority support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Cream Background) */}
          <div className="p-8 sm:p-10 md:p-12 lg:p-14 bg-[#FFFDFB] border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-center">
            <h3 className="font-poppins text-dark text-xl sm:text-[22px] leading-[1.2] font-bold mb-1 tracking-wide text-center md:text-left">
              Claim your founding spot
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium text-center md:text-left">
              Join the waitlist. We won&apos;t spam you.
            </p>
            <div className="max-w-md mx-auto md:mx-0 w-full">
              <WaitlistForm 
                source="bottom_cta" 
                buttonText="Claim Your Founding Spot" 
                layout="vertical" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
