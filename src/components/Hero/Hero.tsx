'use client';

import WaitlistForm from '../WaitlistForm/WaitlistForm';

export default function Hero() {
  const sidebarTabs = [
    { label: 'Welcome', active: true, icon: '🏠' },
    { label: 'Courses', active: false, icon: '📚' },
    { label: 'Lessons', active: false, icon: '📝' },
    { label: 'Events', active: false, icon: '📅' },
    { label: 'Members', active: false, icon: '👥' },
    { label: 'Settings', active: false, icon: '⚙️' }
  ];

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
          {/* Browser Topbar */}
          <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5 justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            </div>
            <div className="bg-white border border-slate-200 rounded px-12 py-0.5 text-[10px] text-slate-400 font-poppins">
              vectore.co/cohort-1
            </div>
            <div className="w-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] h-auto md:h-[calc(100%-40px)] bg-slate-50">
            {/* Sidebar Navigation */}
            <div className="hidden md:flex flex-col gap-1 bg-white border-r border-slate-200 p-4 text-left">
              {sidebarTabs.map((tab, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg font-poppins text-xs font-semibold transition-all cursor-pointer ${
                    tab.active 
                      ? 'bg-primary-light text-primary border-l-2 border-primary rounded-l-none' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span>{tab.label}</span>
                </div>
              ))}
            </div>

            {/* Dashboard Workspace */}
            <div className="p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 text-left">
              {/* Welcome Banner */}
              <div className="h-20 sm:h-[120px] rounded-xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center font-museo text-3xl sm:text-4xl md:text-5xl text-white font-extralight tracking-wide border border-primary/30 relative overflow-hidden shadow-sm">
                <span className="z-10 italic">welcome...</span>
                <div className="absolute right-0 top-0 bottom-0 bg-white/10 w-24 rotate-12 -translate-y-2 translate-x-4"></div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Members Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-2.5 shadow-sm hover:shadow transition-all relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Members</span>
                    <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">+12%</span>
                  </div>
                  <div className="font-poppins text-2xl font-black text-slate-800">2,428</div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mt-1">
                    <div className="bg-primary h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-2.5 shadow-sm hover:shadow transition-all relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Revenue</span>
                    <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">+24%</span>
                  </div>
                  <div className="font-poppins text-2xl font-black text-slate-800">$32.8k</div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mt-1">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
