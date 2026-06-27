'use client';

import WaitlistForm from '../WaitlistForm/WaitlistForm';

export default function BottomSignup() {
  return (
    <section id="bottom-signup" className="py-[100px] bg-white border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-[2px] sm:px-6">
        <div className="bg-dark rounded-2xl p-6 sm:p-10 md:p-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-center relative overflow-hidden before:content-[''] before:absolute before:top-0 before:right-0 before:w-[300px] before:h-[300px] before:bg-[radial-gradient(circle,rgba(230,81,0,0.15)_0%,transparent_70%)] before:z-10">
          <div className="text-white z-20 relative">
            <h2 className="font-museo text-white text-3xl sm:text-4xl md:text-[38px] leading-snug tracking-wide font-extrabold mb-4">
              Become a founding member
            </h2>
            <p className="text-base leading-relaxed tracking-wide text-slate-400 mb-8">
              We&apos;re making this with creators, coaches, and educators who are tired of stitching their teaching across five tools and watching students fall through the gaps.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 font-poppins text-sm sm:text-base font-medium">
                <span className="text-primary text-lg">✓</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium tracking-wide">Lifetime lowest pricing (never pay more)</span>
              </div>
              <div className="flex items-center gap-3 font-poppins text-sm sm:text-base font-medium">
                <span className="text-primary text-lg">✓</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium tracking-wide">Early access to beta versions</span>
              </div>
              <div className="flex items-center gap-3 font-poppins text-sm sm:text-base font-medium">
                <span className="text-primary text-lg">✓</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium tracking-wide">Direct input into product roadmap</span>
              </div>
              <div className="flex items-center gap-3 font-poppins text-sm sm:text-base font-medium">
                <span className="text-primary text-lg">✓</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium tracking-wide">Priority support</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg z-20 relative">
            <WaitlistForm 
              source="bottom_cta" 
              buttonText="Claim Your Founding Spot" 
              layout="vertical" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
