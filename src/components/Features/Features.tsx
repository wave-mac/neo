'use client';

interface FeatureItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  pills: string[];
  mockupType: 'courses' | 'community' | 'events' | 'automations' | 'analytics' | 'pricing';
}

const featuresList: FeatureItem[] = [
  {
    number: '1',
    tag: 'Course & Community',
    title: 'Bring learning and community together',
    description: 'Vectore lets you choose how you want to teach. From self-paced courses, group coaching, cohort-based programs and online workshops. Then build a community experience around your education programs.',
    pills: ['Courses', 'Cohorts', 'Workshops'],
    mockupType: 'courses'
  },
  {
    number: '2',
    tag: 'Discussions & Chats',
    title: 'Create a community people actually participate in',
    description: 'Keep members engaged with discussion posts, chats, challenges, gamification, member matching, and other interactive experiences that give your members more ways to connect, contribute, and learn from one another.',
    pills: ['Discussions', 'Direct Messages', 'Events'],
    mockupType: 'community'
  },
  {
    number: '3',
    tag: 'Events & Coaching',
    title: 'Run events and coaching without extra tools',
    description: 'Host workshops, office hours, coaching sessions, live events, and cohort meetings from one platform without needing to juggle separate scheduling, booking, calendar, or event software.',
    pills: ['Workshops', '1-on-1 Coaching', 'Calendar'],
    mockupType: 'events'
  },
  {
    number: '4',
    tag: 'Automations',
    title: 'Automate the work behind the community',
    description: 'Reduce manual work with workflows for onboarding, engagement, member management, access control, and recurring tasks. Spend less time managing systems and more time supporting members.',
    pills: ['Workflows', 'Onboarding', 'Integrations'],
    mockupType: 'automations'
  },
  {
    number: '5',
    tag: 'Analytics',
    title: 'Make decisions with real visibility',
    description: 'Track participation, program performance, member activity, and revenue from a single dashboard. Get the insights you need to improve your programs and community.',
    pills: ['Engagement', 'Members', 'Revenue'],
    mockupType: 'analytics'
  },
  {
    number: '6',
    tag: 'Pricing',
    title: 'Keep more of your revenue',
    description: 'Zero transaction fees on your product sales. Keep 100% of your earnings. No hidden charges or platform cuts.',
    pills: ['0% Fees', 'Stripe', 'Payouts'],
    mockupType: 'pricing'
  }
];

export default function Features() {
  const renderMockup = (type: string) => {
    switch (type) {
      case 'courses':
        return (
          <div className="w-full max-w-[400px] bg-white border border-slate-200 rounded-2xl p-6 shadow-premium flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-poppins font-bold text-slate-800 text-sm">Course Curriculum</span>
              <span className="text-xs text-primary font-bold">2/3 Modules Completed</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-emerald-500 font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-slate-700">Module 1: Introduction to Vectore</span>
                <span className="ml-auto text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">Done</span>
              </div>
              <div className="flex flex-col gap-2 p-3 bg-white border border-slate-200 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Module 2: Community Design</span>
                  <span className="text-[10px] text-slate-400 font-bold">40%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl opacity-60">
                <span className="text-slate-400 font-bold text-sm">🔒</span>
                <span className="text-xs font-semibold text-slate-700">Module 3: Launching Your Cohort</span>
              </div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="w-full max-w-[400px] bg-white border border-slate-200 rounded-2xl p-6 shadow-premium flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-poppins font-bold text-slate-800 text-sm">Discussion Forum</span>
              <span className="text-xs text-slate-400">Active Now</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0">SM</div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-800">Sarah Miller</span>
                  <p className="text-[11px] text-slate-600">Just launched my first cohort today! The onboarding flow worked flawlessly. 🚀</p>
                  <span className="text-[9px] text-slate-400 mt-1">4 Replies • 12 Likes</span>
                </div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">DK</div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-800">David K.</span>
                  <p className="text-[11px] text-slate-600">How is everyone setting up their weekly study sessions? Zoom or built-in events?</p>
                  <span className="text-[9px] text-slate-400 mt-1">8 Replies • 3 Likes</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="w-full max-w-[400px] bg-white border border-slate-200 rounded-2xl p-6 shadow-premium flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-poppins font-bold text-slate-800 text-sm">Events Calendar</span>
              <span className="text-xs text-primary font-bold">Today</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">Live Workshop</span>
                  <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded font-bold animate-pulse">Live</span>
                </div>
                <h4 className="text-xs font-bold text-slate-800">Community Monetization Strategy</h4>
                <p className="text-[10px] text-slate-500">Today at 5:00 PM • Zoom Integration</p>
                <button className="w-full mt-1 bg-primary hover:bg-primary-hover text-white font-semibold text-[11px] py-2 rounded-md transition-all">
                  Join Session
                </button>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400">Coaching Session</span>
                <h4 className="text-xs font-bold text-slate-700">1-on-1 Strategy Review</h4>
                <p className="text-[10px] text-slate-400">Tomorrow at 10:00 AM • Calendly Sync</p>
              </div>
            </div>
          </div>
        );

      case 'automations':
        return (
          <div className="w-full max-w-[400px] bg-white border border-slate-200 rounded-2xl p-6 shadow-premium flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-poppins font-bold text-slate-800 text-sm">Workflow Automation</span>
              <span className="text-xs text-emerald-500 font-bold">Active</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-full p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
                <span className="text-base">⚡</span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-emerald-600">Trigger</span>
                  <span className="text-xs font-semibold text-slate-700">Student registers for Course</span>
                </div>
              </div>
              <span className="text-slate-400 text-sm">↓</span>
              <div className="w-full p-2.5 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                <span className="text-base">👥</span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-blue-600">Action</span>
                  <span className="text-xs font-semibold text-slate-700">Add to Cohort #1 Discussions</span>
                </div>
              </div>
              <span className="text-slate-400 text-sm">↓</span>
              <div className="w-full p-2.5 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-3">
                <span className="text-base">✉️</span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-amber-600">Action</span>
                  <span className="text-xs font-semibold text-slate-700">Send welcome DM from Host</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="w-full max-w-[400px] bg-white border border-slate-200 rounded-2xl p-6 shadow-premium flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-poppins font-bold text-slate-800 text-sm">Engagement Insights</span>
              <span className="text-xs text-slate-400">Last 30 Days</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[9px] uppercase font-bold text-slate-400">Members</span>
                <div className="text-sm font-bold text-slate-800">1,420</div>
                <span className="text-[8px] text-emerald-500 font-semibold">+12.4%</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[9px] uppercase font-bold text-slate-400">Active Rate</span>
                <div className="text-sm font-bold text-slate-800">84.2%</div>
                <span className="text-[8px] text-emerald-500 font-semibold">+8.1%</span>
              </div>
            </div>
            <div className="flex items-end justify-between h-20 pt-4 px-2">
              <div className="w-6 bg-primary/20 h-8 rounded-t"></div>
              <div className="w-6 bg-primary/30 h-12 rounded-t"></div>
              <div className="w-6 bg-primary/50 h-10 rounded-t"></div>
              <div className="w-6 bg-primary/70 h-14 rounded-t"></div>
              <div className="w-6 bg-primary/90 h-[70px] rounded-t"></div>
              <div className="w-6 bg-primary h-[80px] rounded-t"></div>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="w-full max-w-[400px] bg-white border border-slate-200 rounded-2xl p-6 shadow-premium flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-poppins font-bold text-slate-800 text-sm">Transaction Fee Match</span>
              <span className="text-xs text-primary font-bold">Payouts</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-rose-700">Other Platforms</span>
                  <span className="text-[9px] text-rose-500">Transaction Cuts</span>
                </div>
                <span className="font-poppins font-bold text-rose-600 text-sm">5% - 10%</span>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex justify-between items-center relative overflow-hidden">
                <div className="flex flex-col z-10">
                  <span className="text-xs font-bold text-emerald-800">Vectore Platform</span>
                  <span className="text-[9px] text-emerald-600">Keep 100% Revenue</span>
                </div>
                <span className="font-poppins font-extrabold text-emerald-700 text-xl z-10">0%</span>
                <div className="absolute right-0 top-0 bottom-0 bg-emerald-100/50 w-16 rotate-12 -translate-y-2 translate-x-4"></div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-[100px] bg-[radial-gradient(circle_at_bottom_left,rgba(230,81,0,0.03),transparent_60%)] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-museo text-3xl sm:text-4xl md:text-[40px] leading-tight font-extrabold text-dark mb-5">
            The complete online <br className="hidden sm:inline" />
            community platform built for learning
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-dark-light max-w-[600px] mx-auto">
            Vectore empowers you with all the tools you need to build a thriving community around your education business.
          </p>
        </div>

        {/* Alternating Features Timeline */}
        <div className="relative flex flex-col gap-24 md:gap-32">
          {/* Vertical central line for desktop timeline */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-slate-200 hidden md:block -translate-x-1/2 z-0"></div>

          {featuresList.map((feat, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10"
              >
                {/* Timeline center node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm hidden md:flex items-center justify-center font-bold text-xs text-slate-400 z-20">
                  {feat.number}
                </div>

                {/* Text Content */}
                <div 
                  className={`flex flex-col gap-4 ${
                    isEven 
                      ? 'order-1 md:order-1 md:pr-12 lg:pr-20' 
                      : 'order-1 md:order-2 md:pl-12 lg:pl-20'
                  }`}
                >
                  <div className="self-start text-xs font-bold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">
                    {feat.tag}
                  </div>
                  <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-dark tracking-tight leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark-light">
                    {feat.description}
                  </p>
                  
                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {feat.pills.map((pill, pIndex) => (
                      <span 
                        key={pIndex} 
                        className="bg-slate-100 text-slate-600 rounded px-2.5 py-1 text-xs font-semibold"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preview Mockup Card */}
                <div 
                  className={`flex justify-center ${
                    isEven 
                      ? 'order-2 md:order-2 md:pl-12 lg:pl-20' 
                      : 'order-2 md:order-1 md:pr-12 lg:pr-20'
                  }`}
                >
                  {renderMockup(feat.mockupType)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
