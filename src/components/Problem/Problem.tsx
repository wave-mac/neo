'use client';

export default function Problem() {
  const pills = [
    { icon: '📺', text: 'video platform' },
    { icon: '🔔', text: 'event reminders' },
    { icon: '💬', text: 'community app' },
    { icon: '🗓️', text: 'booking tool' },
    { icon: '💳', text: 'billing / Stripe' }
  ];

  const steps = [
    { icon: '📺', text: 'A student watches lessons on one platform' },
    { icon: '🔔', text: 'Receives event reminders somewhere else' },
    { icon: '💬', text: 'Joins discussion in separate community app' },
    { icon: '🗓️', text: 'Books coaching session through another tool' }
  ];

  return (
    <section id="problem" className="bg-white py-[100px] border-t border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">THE PROBLEM</span>
          <h2 className="font-museo text-3xl sm:text-4xl md:text-[40px] leading-snug font-extrabold text-dark mb-5 tracking-wide">
            Learning shouldn&apos;t feel fragmented.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed tracking-wide text-dark-light max-w-[720px] mx-auto">
            People learn better together. But most learning businesses are built across disconnected tools — and every extra login for students is another chance to disengage.
          </p>
        </div>

        {/* 5 Stacked Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {pills.map((pill, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-600 shadow-sm tracking-wide">
              <span>{pill.icon}</span>
              <span>{pill.text}</span>
            </div>
          ))}
        </div>

        {/* Connector Line and Arrow */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-[1px] h-8 bg-slate-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary -mt-1.5"></div>
        </div>

        {/* 2x2 Grid of Fragmented Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto mb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-[#fff] border border-slate-200 rounded-2xl shadow-sm text-left hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-[#fff] border border-slate-200 flex items-center justify-center text-lg shrink-0 shadow-sm">{step.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed tracking-wide">{step.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Orange Alert Box */}
        <div className="max-w-[700px] mx-auto bg-primary rounded-2xl p-6 sm:p-8 shadow-md text-white">
          <p className="text-sm sm:text-base leading-relaxed tracking-wide font-medium">
            Every additional step creates friction. Every new login is another opportunity to disengage. Over time, students stop participating, conversations lose momentum. <span className="font-bold underline decoration-2 underline-offset-4">It should work as one connected experience.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
