'use client';

export default function Problem() {
  return (
    <section id="problem" className="bg-transparent text-dark py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <span className="block text-[#E65100] font-poppins text-xs font-bold tracking-widest uppercase mb-4">THE PROBLEM</span>
          <h2 className="font-museo text-3xl sm:text-4xl md:text-[40px] leading-[1.15] font-extrabold text-dark mb-5 tracking-tight">
            Learning shouldn&apos;t feel fragmented.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed tracking-wide text-dark-light max-w-[700px] mx-auto">
            People learn better together. But most learning businesses are built across disconnected tools, and every extra login for students is another chance to disengage.
          </p>
        </div>

        {/* Disconnected Tool Pills */}
        <div className="flex flex-col items-center gap-3.5 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white border border-slate-200/80 rounded-full px-4 py-2 text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
              Video platform
            </span>
            <span className="bg-white border border-slate-200/80 rounded-full px-4 py-2 text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
              Email reminders
            </span>
            <span className="bg-white border border-slate-200/80 rounded-full px-4 py-2 text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
              Community app
            </span>
            <span className="bg-white border border-slate-200/80 rounded-full px-4 py-2 text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
              Booking tool
            </span>
          </div>
          <div className="flex justify-center">
            <span className="bg-white border border-slate-200/80 rounded-full px-4 py-2 text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FB923C]"></span>
              Scheduling app
            </span>
          </div>
        </div>

        {/* Connector Text and Arrow */}
        <div className="flex flex-col items-center mb-8">
          <p className="text-xs sm:text-sm text-slate-400 font-medium mb-3">
            students fall through the gaps between them
          </p>
          <span className="text-[#E65100] text-xl font-bold">↓</span>
        </div>

        {/* Bottom CTA Pill */}
        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center gap-2.5 bg-[#FFF6F0] border border-orange-100 rounded-full px-6 py-3 shadow-[0_8px_30px_rgba(230,81,0,0.06)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="14" height="14" rx="3.5" transform="rotate(45 12 12)" fill="#E65100" />
            </svg>
            <span className="font-poppins font-semibold text-dark text-sm sm:text-base">
              One connected experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
