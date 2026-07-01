'use client';

import Image from 'next/image';
import WaitlistForm from '../WaitlistForm/WaitlistForm';

export default function Hero() {
  /*
  const sidebarTabs = [
    { label: 'Welcome', active: true, icon: '🏠' },
    { label: 'Courses', active: false, icon: '📚' },
    { label: 'Lessons', active: false, icon: '📝' },
    { label: 'Events', active: false, icon: '📅' },
    { label: 'Members', active: false, icon: '👥' },
    { label: 'Settings', active: false, icon: '⚙️' }
  ];
  */

  return (
    <section className="pt-[140px] pb-20 relative overflow-hidden text-center bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 bg-[#FFF3E0]/70 text-primary border border-primary/20 font-poppins text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]"></span>
          Founding spots now open • Private beta
        </div>
        <h1 className="font-museo text-4xl sm:text-5xl md:text-[60px] leading-[1.08] font-extrabold text-dark max-w-[850px] mx-auto mb-6 md:mb-8 tracking-tight">
          Every way you teach, <br />
          <span className="text-[#E65100]">better with a <br /> community.</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed tracking-wide text-dark-light max-w-[700px] mx-auto mb-10 font-normal">
          Bring courses, cohorts, coaching, workshops, and events into one platform, 
          with community built into the experience from day one.
        </p>

        <div className="max-w-[560px] mx-auto mb-4">
          <WaitlistForm source="hero_cta" buttonText="Claim your founding spot" />
        </div>
        
        <p className="text-xs text-slate-400 font-poppins mt-3 leading-relaxed">
          Founding members get lifetime lowest pricing and early access <br className="hidden sm:inline" /> when we launch.
        </p>

        {/* Dashboard Mockup Component using Real Image */}
        <div className="mt-16 mx-auto max-w-[850px] rounded-2xl border border-slate-200 shadow-premium bg-white overflow-hidden relative">
          <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5 justify-between select-none">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            </div>
            <div className="bg-white border border-slate-200 rounded px-12 py-0.5 text-[10px] text-slate-400 font-poppins">
              vectore.co/dashboard
            </div>
            <div className="w-6"></div>
          </div>
          
          <div className="relative w-full overflow-hidden bg-slate-50">
            <Image 
              src="/8.png" 
              alt="Vectore Dashboard Mockup" 
              width={1152} 
              height={720} 
              priority
              className="w-full h-auto sm:h-[420px] object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
