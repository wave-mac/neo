'use client';

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-[100px] border-t border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-museo text-3xl sm:text-4xl md:text-[40px] leading-tight font-extrabold text-dark mb-5">
            Learning shouldn&apos;t feel fragmented.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-dark-light max-w-[600px] mx-auto">
            People learn better together. But most learning businesses are built across disconnected tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed text-dark-light">
              <span className="font-semibold text-dark">A student watches lessons on one platform</span>, receives event reminders somewhere else, joins discussions in a separate community app, and books coaching sessions through another tool.
            </p>
            <p className="text-base leading-relaxed text-dark-light">
              Every additional step creates friction. Every new login is another opportunity to disengage.
            </p>
            <p className="text-base leading-relaxed text-dark-light">
              Over time, students stop participating, conversations lose momentum, and valuable learning moments disappear between platforms.
            </p>
            <p className="text-base leading-relaxed text-primary font-semibold">
              Your learning ecosystem shouldn&apos;t be spread across five different tools. It should work as one connected experience.
            </p>
          </div>

          <div className="bg-dark-bg border border-slate-200 rounded-2xl p-4 sm:p-8 flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 flex items-center justify-center text-base sm:text-lg shrink-0">📺</div>
              <div className="text-xs sm:text-sm font-medium text-dark">Watch Course Video</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 ml-auto bg-slate-100 px-2 sm:px-2.5 py-1 rounded shrink-0">Teachable</div>
            </div>
            <div className="text-center text-base sm:text-lg text-slate-400 leading-none">↓</div>
            <div className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 flex items-center justify-center text-base sm:text-lg shrink-0">🔔</div>
              <div className="text-xs sm:text-sm font-medium text-dark">Receive Event Alerts</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 ml-auto bg-slate-100 px-2 sm:px-2.5 py-1 rounded shrink-0">Email / Zoom</div>
            </div>
            <div className="text-center text-base sm:text-lg text-slate-400 leading-none">↓</div>
            <div className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 flex items-center justify-center text-base sm:text-lg shrink-0">💬</div>
              <div className="text-xs sm:text-sm font-medium text-dark">Participate in Chat</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 ml-auto bg-slate-100 px-2 sm:px-2.5 py-1 rounded shrink-0">Slack / Discord</div>
            </div>
            <div className="text-center text-base sm:text-lg text-slate-400 leading-none">↓</div>
            <div className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 flex items-center justify-center text-base sm:text-lg shrink-0">🗓️</div>
              <div className="text-xs sm:text-sm font-medium text-dark">Book 1-on-1 Coaching</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 ml-auto bg-slate-100 px-2 sm:px-2.5 py-1 rounded shrink-0">Calendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
