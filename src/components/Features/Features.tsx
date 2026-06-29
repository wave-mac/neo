'use client';

interface FeatureCard {
  tag: string;
  title: string;
  description: string;
  pills: string[];
  mockupType?: 'programs' | 'chats' | 'events' | 'automations' | 'analytics' | 'payout';
}

const featuresList: FeatureCard[] = [
  {
    tag: 'Course & Community',
    title: 'Bring learning and community together',
    description: 'Choose how you want to teach: self-paced courses, group coaching, cohort-based programs, or online workshops. Focus on a community experience standard.',
    pills: ['Courses', 'Cohorts', 'Workshops', 'Masterclass'],
    mockupType: 'programs'
  },
  {
    tag: 'Discussions & Chats',
    title: 'Create a community people actually participate in',
    description: 'Keep members engaged with discussion posts, chats, challenges, gamification, and member matching. Let your members connect, contribute, and learn from one another in the same spot.',
    pills: ['Discussions', 'Direct Messages', 'Group Chats', 'Member Profiles'],
    mockupType: 'chats'
  },
  {
    tag: 'Events & Coaching',
    title: 'Run events and coaching without extra tools',
    description: 'Host workshops, office hours, coaching sessions, live events, and cohort meetings from one platform without needing to juggle separate scheduling, booking, calendar, or event software.',
    pills: ['Workshops', 'Calendar', '1:1 Sync'],
    mockupType: 'events'
  },
  {
    tag: 'Automations',
    title: 'Automate the work behind the community',
    description: 'Reduce manual work with workflows for onboarding, engagement, member management, access control, and recurring tasks. Spend less time managing systems and more time supporting members.',
    pills: ['Workflows', 'Onboarding', 'Member Actions', 'API Integrations'],
    mockupType: 'automations'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feat, idx) => (
            <div key={idx} className="bg-[#fff] border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between items-center text-center shadow-sm hover:-translate-y-1 hover:shadow-premium hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col items-center gap-2.5">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">
                  {feat.tag}
                </span>
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-dark leading-snug tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed tracking-wide text-dark-light">
                  {feat.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-5 flex flex-col items-center justify-between gap-3 sm:gap-4 w-full flex-1">
                {/* Create a Program Mockup (Image 5) */}
                {feat.mockupType === 'programs' && (
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 lg:p-4 w-full text-left shadow-sm my-1.5 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-2 lg:mb-2.5">
                      <span className="font-bold text-slate-800 text-xs lg:text-sm">Create a program</span>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white border border-slate-200 rounded-xl p-2 lg:p-2.5 flex flex-col gap-0.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm">📖</span>
                          <span className="text-[8px] font-bold text-slate-500 uppercase bg-slate-100 px-1 rounded">Course</span>
                        </div>
                        <span className="font-bold text-slate-800 text-[11px] lg:text-xs leading-tight mt-0.5">Course</span>
                        <span className="text-[9px] text-slate-500 line-clamp-2">Self-paced curriculum builder.</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-2 lg:p-2.5 flex flex-col gap-0.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm">📅</span>
                          <span className="text-[8px] font-bold text-slate-500 uppercase bg-slate-100 px-1 rounded">Program</span>
                        </div>
                        <span className="font-bold text-slate-800 text-[11px] lg:text-xs leading-tight mt-0.5">Cohort</span>
                        <span className="text-[9px] text-slate-500 line-clamp-2">Group program with schedule.</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-2 lg:p-2.5 flex flex-col gap-0.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm">👤</span>
                          <span className="text-[8px] font-bold text-slate-500 uppercase bg-slate-100 px-1 rounded">Coaching</span>
                        </div>
                        <span className="font-bold text-slate-800 text-[11px] lg:text-xs leading-tight mt-0.5">1:1 Coaching</span>
                        <span className="text-[9px] text-slate-500 line-clamp-2">Private self-book slots.</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-2 lg:p-2.5 flex flex-col gap-0.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm">👥</span>
                          <span className="text-[8px] font-bold text-slate-500 uppercase bg-slate-100 px-1 rounded">Coaching</span>
                        </div>
                        <span className="font-bold text-slate-800 text-[11px] lg:text-xs leading-tight mt-0.5">Group Session</span>
                        <span className="text-[9px] text-slate-500 line-clamp-2">Shared seat sessions.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Discussions & Chats Mockup (Image 3) */}
                {feat.mockupType === 'chats' && (
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 lg:p-4 w-full text-left shadow-sm my-1.5 flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-center pb-1.5 lg:pb-2 border-b border-slate-200/60">
                      <span className="font-bold text-slate-800 text-xs flex items-center gap-1">
                        <span className="text-slate-400 font-normal">#</span> general
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">142 online</span>
                    </div>
                    
                    <div className="flex flex-col gap-2 py-1 lg:py-2">
                      <div className="flex items-start gap-2 text-[11px]">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary flex-shrink-0 mt-0.5"></div>
                        <div className="flex flex-col">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-bold text-slate-800">Jordan</span>
                            <span className="text-[9px] text-slate-400">2:14 PM</span>
                          </div>
                          <p className="text-slate-600 leading-tight mt-0.5">
                            Just shipped my capstone project 🎉 feedback welcome!
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-[11px]">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-orange-400 flex-shrink-0 mt-0.5"></div>
                        <div className="flex flex-col">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-bold text-slate-800">Priya</span>
                            <span className="text-[9px] text-slate-400">2:16 PM</span>
                          </div>
                          <p className="text-slate-600 leading-tight mt-0.5">
                            Congrats!! 🔥 this is exactly what the challenge was made for
                          </p>
                          <div className="flex gap-1.5 mt-1">
                            <span className="bg-orange-50 border border-orange-200 text-[9px] lg:text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold text-primary">
                              🎉 24
                            </span>
                            <span className="bg-white border border-slate-200 text-[9px] lg:text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium text-slate-600">
                              🔥 18
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-1.5 flex items-center justify-between pl-2.5 shadow-2xs mt-0.5">
                      <span className="text-[10px] text-slate-400 truncate">Share something with the community...</span>
                      <div className="bg-primary text-white rounded-lg px-2 py-0.5 text-[10px] font-bold">↑</div>
                    </div>
                  </div>
                )}

                {/* Events Form Mockup (Image 3) */}
                {feat.mockupType === 'events' && (
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 lg:p-4 w-full text-left shadow-sm my-1.5 flex-1 flex flex-col justify-center gap-2 lg:gap-2.5">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-600 block mb-0.5">Event Title *</span>
                      <div className="bg-white border border-slate-200 rounded-lg p-1.5 lg:p-2 text-[10px] lg:text-[11px] text-slate-400">e.g., Weekly Q&A Session</div>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-600 block mb-0.5">Cover Image</span>
                      <div className="bg-white border border-dashed border-slate-300 rounded-lg p-2 lg:p-2.5 text-center flex flex-col items-center gap-0.5">
                        <span className="text-xs">🖼️</span>
                        <span className="text-[9px] text-slate-500 font-medium">Click to upload cover image</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] font-semibold text-slate-600 block mb-0.5">Date *</span>
                        <div className="bg-white border border-slate-200 rounded-lg p-1.5 text-[10px] text-slate-500 flex justify-between items-center">
                          <span>📅 Select date</span>
                          <span>▾</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-slate-600 block mb-0.5">Time *</span>
                        <div className="bg-white border border-slate-200 rounded-lg p-1.5 text-[10px] text-slate-500 flex justify-between items-center">
                          <span>🕒 Select time</span>
                          <span>▾</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Automations Workflow Mockup (Image 1 & 4) */}
                {feat.mockupType === 'automations' && (
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 lg:p-4 w-full text-left shadow-sm my-1.5 flex-1 flex flex-col justify-between gap-1.5 lg:gap-2 relative overflow-hidden">
                    <div className="flex justify-between items-center pb-1.5 border-b border-slate-200">
                      <span className="font-bold text-slate-800 text-[11px]">Welcome New Members</span>
                      <span className="bg-primary text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full">Test & Simulate</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 py-1">
                      {/* Trigger node */}
                      <div className="bg-white border border-slate-200 rounded-xl p-1.5 lg:p-2 w-full shadow-sm text-left">
                        <span className="text-[8px] font-bold text-primary uppercase block">TRIGGER</span>
                        <span className="font-bold text-slate-800 text-[10px] sm:text-[11px]">Member Joins</span>
                      </div>
                      <span className="text-primary text-[10px] leading-none">▼</span>
                      {/* Action 1 */}
                      <div className="bg-white border border-slate-200 rounded-xl p-1.5 lg:p-2 w-full shadow-sm text-left">
                        <span className="text-[8px] font-bold text-emerald-600 uppercase block">ACTION</span>
                        <span className="font-bold text-slate-800 text-[10px] sm:text-[11px]">Grant Access</span>
                      </div>
                      <span className="text-primary text-[10px] leading-none">▼</span>
                      {/* Action 2 */}
                      <div className="bg-white border border-slate-200 rounded-xl p-1.5 lg:p-2 w-full shadow-sm text-left">
                        <span className="text-[8px] font-bold text-emerald-600 uppercase block">ACTION</span>
                        <span className="font-bold text-slate-800 text-[10px] sm:text-[11px]">Send Welcome DM</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Analytics Mockup */}
                {feat.mockupType === 'analytics' && (
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 lg:p-4.5 w-full text-left shadow-sm hover:shadow transition-all my-1.5 flex-1 flex flex-col justify-between gap-2.5">
                    <div className="grid grid-cols-3 gap-1.5 lg:gap-2 mb-0.5">
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-1.5 lg:p-2 flex flex-col justify-between">
                        <span className="text-slate-500 font-medium text-[9px] sm:text-[10px]">Participation</span>
                        <div className="font-poppins font-bold text-xs sm:text-sm text-slate-800 my-0.5">74%</div>
                        <div className="text-[8px] sm:text-[9px] font-bold text-primary">▲ 9.2%</div>
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-1.5 lg:p-2 flex flex-col justify-between">
                        <span className="text-slate-500 font-medium text-[9px] sm:text-[10px]">Active</span>
                        <div className="font-poppins font-bold text-xs sm:text-sm text-slate-800 my-0.5">2,418</div>
                        <div className="text-[8px] sm:text-[9px] font-bold text-primary">▲ 12%</div>
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-1.5 lg:p-2 flex flex-col justify-between">
                        <span className="text-slate-500 font-medium text-[9px] sm:text-[10px]">Revenue</span>
                        <div className="font-poppins font-bold text-xs sm:text-sm text-slate-800 my-0.5">$31.6k</div>
                        <div className="text-[8px] sm:text-[9px] font-bold text-primary">▲ 8.9%</div>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-2.5 lg:p-3 flex-1 flex flex-col justify-between">
                      <div className="text-slate-600 font-bold text-[10px] sm:text-[11px] mb-1.5">Engagement · last 7 days</div>
                      <div className="flex items-end justify-between gap-1.5 h-16 sm:h-18 lg:h-20 pt-1">
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
                  <div className="bg-white border border-orange-200/80 rounded-2xl p-3.5 sm:p-4 lg:p-4.5 w-full text-left shadow-sm hover:shadow transition-all relative overflow-hidden my-1.5 flex-1 flex flex-col justify-between gap-2.5">
                    <div className="flex items-baseline mb-1">
                      <span className="font-poppins font-black text-3xl sm:text-4xl text-primary leading-none">0%</span>
                      <span className="text-slate-600 font-medium text-xs sm:text-sm ml-2">transaction fees</span>
                    </div>

                    <div className="bg-[#FFF9F5] border border-orange-200/60 rounded-xl p-3 sm:p-3.5 w-full flex-1 flex flex-col justify-between">
                      <div className="text-slate-500 font-semibold text-[10px] sm:text-[11px] mb-1.5">This month&apos;s payout</div>
                      
                      <div className="flex justify-between items-center text-xs border-b border-orange-200/50 pb-1.5 mb-1.5">
                        <span className="text-slate-600 font-medium">Gross sales</span>
                        <span className="font-poppins font-bold text-slate-800">$8,420</span>
                      </div>

                      <div className="flex justify-between items-center text-xs border-b border-orange-200/50 pb-1.5 mb-1.5">
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
