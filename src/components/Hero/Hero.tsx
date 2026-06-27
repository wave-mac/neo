'use client';

import WaitlistForm from '../WaitlistForm/WaitlistForm';

export default function Hero() {
  return (
    <section className="pt-[140px] pb-20 relative overflow-hidden text-center bg-[radial-gradient(circle_at_top_right,rgba(230,81,0,0.05),transparent_60%)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="inline-block bg-primary-light text-primary font-poppins text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          FOUNDING SPOT OFFER • LIMITED BATCH
        </div>
        <h1 className="font-museo text-4xl sm:text-5xl md:text-[56px] leading-[1.15] font-extrabold text-dark max-w-[800px] mx-auto mb-6 tracking-tight animate-fade-in-up">
          Every way you teach, <br />
          <span className="text-primary">better with a community.</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-dark-light max-w-[680px] mx-auto mb-10 font-normal">
          Bring courses, cohorts, coaching, workshops, and events into one platform, 
          with community built into the experience from day one.
        </p>

        <div className="max-w-[480px] mx-auto mb-4">
          <WaitlistForm source="hero_cta" buttonText="Claim your founding spot" />
        </div>
        
        <p className="text-xs sm:text-sm text-slate-500 font-poppins">
          Founding members get lifetime lowest pricing and early access when we launch.
        </p>

        {/* Dashboard Mockup Component */}
        <div className="mt-16 mx-auto max-w-[900px] rounded-2xl border border-slate-200 shadow-premium bg-white overflow-hidden relative aspect-auto md:aspect-video animate-float">
          <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[240px_1fr] h-auto md:h-[calc(100%-40px)] bg-slate-50">
            <div className="hidden md:flex flex-col gap-4 bg-white border-r border-slate-200 p-6">
              <div className="h-3.5 rounded bg-primary/80 w-[80%]"></div>
              <div className="h-3.5 rounded bg-slate-200 w-[60%]"></div>
              <div className="h-3.5 rounded bg-slate-200 w-[70%]"></div>
              <div className="h-3.5 rounded bg-slate-200 w-[50%]"></div>
              <div className="h-3.5 rounded bg-slate-200 w-[65%]"></div>
            </div>
            <div className="p-4 sm:p-8 flex flex-col gap-4 sm:gap-6">
              <div className="h-16 sm:h-[120px] rounded-xl bg-gradient-to-r from-primary/10 to-primary/20 flex items-center px-4 sm:px-8 font-museo text-lg sm:text-2xl md:text-3xl text-primary font-extrabold border border-dashed border-primary/30">
                Welcome to Vectore Cohort #1
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4 sm:gap-6">
                <div className="h-[120px] sm:h-[160px] bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
                  <div className="h-3 rounded bg-primary/30 w-[40%]"></div>
                  <div className="h-3 rounded bg-slate-100 w-[90%]"></div>
                  <div className="h-3 rounded bg-slate-100 w-[80%]"></div>
                  <div className="h-3 rounded bg-slate-100 w-[85%]"></div>
                </div>
                <div className="h-[120px] sm:h-[160px] bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
                  <div className="h-3 rounded bg-emerald-500/30 w-[70%]"></div>
                  <div className="h-3 rounded bg-slate-100 w-[90%]"></div>
                  <div className="h-3 rounded bg-slate-100 w-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
