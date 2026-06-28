'use client';

interface FeatureCard {
  tag: string;
  title: string;
  description: string;
  pills: string[];
  mockupType?: 'analytics' | 'payout';
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
    pills: ['Active Members', 'Engagement', 'Revenue'],
    mockupType: 'analytics'
  },
  {
    tag: 'Keep 100% of revenue',
    title: 'Keep more of your revenue',
    description: 'Zero transaction fees on your product sales. Keep 100% of your earnings. No hidden charges or platform cuts.',
    pills: ['0% Fees', 'Stripe', 'Payouts'],
    mockupType: 'payout'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#FAFAFA]">
      {/* Dark Header Banner */}
      <div className="bg-dark text-white text-center py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => (
            <div key={idx} className="bg-[#fff] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-sm hover:-translate-y-1 hover:shadow-premium hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">
                  {feat.tag}
                </span>
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-dark leading-snug tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed tracking-wide text-dark-light">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 w-full">
                {/* Analytics Mockup */}
                {feat.mockupType === 'analytics' && (
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 w-full text-left shadow-sm hover:shadow transition-all my-2">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-2 flex flex-col justify-between">
                        <span className="text-slate-500 font-medium text-[10px]">Participation</span>
                        <div className="font-poppins font-bold text-xs sm:text-sm text-slate-800 my-0.5">74%</div>
                        <div className="text-[9px] font-bold text-primary">▲ 9.2%</div>
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-2 flex flex-col justify-between">
                        <span className="text-slate-500 font-medium text-[10px]">Active</span>
                        <div className="font-poppins font-bold text-xs sm:text-sm text-slate-800 my-0.5">2,418</div>
                        <div className="text-[9px] font-bold text-primary">▲ 12%</div>
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-2 flex flex-col justify-between">
                        <span className="text-slate-500 font-medium text-[10px]">Revenue</span>
                        <div className="font-poppins font-bold text-xs sm:text-sm text-slate-800 my-0.5">$31.6k</div>
                        <div className="text-[9px] font-bold text-primary">▲ 8.9%</div>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-2.5">
                      <div className="text-slate-600 font-bold text-[10px] sm:text-[11px] mb-2">Engagement · last 7 days</div>
                      <div className="flex items-end justify-between gap-1.5 h-16 pt-1">
                        <div className="w-full bg-[#FDBA74] rounded-t-sm h-[35%]"></div>
                        <div className="w-full bg-[#FDBA74] rounded-t-sm h-[55%]"></div>
                        <div className="w-full bg-[#FDBA74] rounded-t-sm h-[42%]"></div>
                        <div className="w-full bg-[#FDBA74] rounded-t-sm h-[70%]"></div>
                        <div className="w-full bg-[#FDBA74] rounded-t-sm h-[60%]"></div>
                        <div className="w-full bg-primary rounded-t-sm h-[92%] shadow-sm"></div>
                        <div className="w-full bg-[#FDBA74] rounded-t-sm h-[65%]"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 0% Fee & Payout Mockup */}
                {feat.mockupType === 'payout' && (
                  <div className="bg-white border border-orange-200/80 rounded-2xl p-4 sm:p-5 w-full text-left shadow-sm hover:shadow transition-all relative overflow-hidden my-2">
                    <div className="flex items-baseline mb-3">
                      <span className="font-poppins font-black text-3xl sm:text-4xl text-primary leading-none">0%</span>
                      <span className="text-slate-600 font-medium text-xs sm:text-sm ml-2">transaction fees</span>
                    </div>

                    <div className="bg-[#FFF9F5] border border-orange-200/60 rounded-xl p-3 sm:p-3.5 w-full">
                      <div className="text-slate-500 font-semibold text-[11px] mb-2">This month&apos;s payout</div>
                      
                      <div className="flex justify-between items-center text-xs border-b border-orange-200/50 pb-1.5 mb-1.5">
                        <span className="text-slate-600 font-medium">Gross sales</span>
                        <span className="font-poppins font-bold text-slate-800">$8,420</span>
                      </div>

                      <div className="flex justify-between items-center text-xs border-b border-orange-200/50 pb-1.5 mb-2">
                        <span className="text-slate-600 font-medium">Platform fees</span>
                        <span className="font-poppins font-bold text-primary">-$0.00</span>
                      </div>

                      <div className="flex justify-between items-center text-xs sm:text-sm pt-0.5">
                        <span className="font-bold text-slate-900">You keep</span>
                        <span className="font-poppins font-black text-primary text-base sm:text-lg">$8,420</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Orange Text Skill Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {feat.pills.map((pill, pIndex) => (
                    <span key={pIndex} className="bg-primary-light text-primary rounded px-2.5 py-1 text-[11px] font-semibold tracking-wide">
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
