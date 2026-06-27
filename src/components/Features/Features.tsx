'use client';

interface FeatureCard {
  tag: string;
  title: string;
  description: string;
  pills: string[];
  hasMockup?: boolean;
}

const featuresList: FeatureCard[] = [
  {
    tag: 'Course & Community',
    title: 'Bring learning and community together',
    description: 'Choose how you want to teach: self-paced courses, group coaching, cohort-based programs, or online workshops. Focus on a community experience standard.',
    pills: ['Courses', 'Cohorts', 'Workshops', 'Masterclass']
  },
  {
    tag: 'Discussions & Chats',
    title: 'Create a community people actually participate in',
    description: 'Keep members engaged with discussion posts, chats, challenges, gamification, and member matching — letting your members connect, contribute, and learn from one another in the same spot.',
    pills: ['Discussions', 'Direct Messages', 'Group Chats', 'Member Profiles']
  },
  {
    tag: 'Events & Coaching',
    title: 'Run events and coaching without extra tools',
    description: 'Host workshops, office hours, coaching sessions, live events, and cohort meetings from one platform without needing to juggle separate scheduling, booking, calendar, or event software.',
    pills: ['Workshops', 'Calendar', '1:1 Sync']
  },
  {
    tag: 'Automations',
    title: 'Automate the work behind the community',
    description: 'Reduce manual work with workflows for onboarding, engagement, member management, access control, and recurring tasks. Spend less time managing systems and more time supporting members.',
    pills: ['Workflows', 'Onboarding', 'Member Actions', 'API Integrations']
  },
  {
    tag: 'Analytics',
    title: 'Make decisions with real visibility',
    description: 'Track participation, program performance, member activity, and revenue from a single dashboard. Get the insights you need to improve your programs and community.',
    pills: ['Active Members', 'Engagement', 'Revenue']
  },
  {
    tag: 'Keep 100% of revenue',
    title: 'Keep more of your revenue',
    description: 'Zero transaction fees on your product sales. Keep 100% of your earnings. No hidden charges or platform cuts.',
    pills: ['0% Fees', 'Stripe', 'Payouts'],
    hasMockup: true
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#FAFAFA]">
      {/* Dark Header Banner */}
      <div className="bg-dark text-white text-center py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-museo text-3xl sm:text-4xl md:text-[40px] leading-snug tracking-wide font-extrabold mb-5">
            The complete online <br className="hidden sm:inline" />
            community platform <span className="text-primary italic">built for learning.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed tracking-wide text-slate-400 max-w-[640px] mx-auto">
            Vectore empowers you with all the tools you need to build a thriving community around your education business.
          </p>
        </div>
      </div>

      {/* 3x2 Grid of Cards */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-premium hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col gap-4">
                <span className="self-start text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">
                  {feat.tag}
                </span>
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-dark leading-snug tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed tracking-wide text-dark-light">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {/* 0% Fee Mockup inside Card 6 */}
                {feat.hasMockup && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between relative overflow-hidden">
                    <div className="flex flex-col z-10">
                      <span className="text-xs font-bold text-emerald-800">Vectore Payouts</span>
                      <span className="text-[10px] text-emerald-600">Keep 100% of sales</span>
                    </div>
                    <span className="font-poppins font-black text-emerald-700 text-xl z-10">0% fee</span>
                    <div className="absolute right-0 top-0 bottom-0 bg-emerald-100/30 w-16 rotate-12 -translate-y-2 translate-x-4"></div>
                  </div>
                )}

                {/* Gray Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {feat.pills.map((pill, pIndex) => (
                    <span key={pIndex} className="bg-slate-100 text-slate-500 rounded px-2.5 py-1 text-[11px] font-semibold tracking-wide">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
