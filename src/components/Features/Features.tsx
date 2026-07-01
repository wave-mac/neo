'use client';

import Image from 'next/image';

interface FeatureCard {
  tag: string;
  title: string;
  description: string;
  pills: string[];
  mockupType?: 'programs' | 'chats' | 'events' | 'automations' | 'analytics' | 'payout';
}

const featuresList: FeatureCard[] = [
  {
    tag: '01 · Teach your way',
    title: 'Bring learning and community together',
    description: 'Choose how you want to teach: self-paced courses, group coaching, cohort-based programs, or online workshops. Then build a community experience around all of it.',
    pills: ['Courses', 'Cohorts', 'Coaching', 'Workshops'],
    mockupType: 'programs'
  },
  {
    tag: '02 · Keep them active',
    title: 'Create a community people actually participate in',
    description: 'Keep members engaged with discussion posts, chats, challenges, gamification, and member matching. Let your members connect, contribute, and learn from one another in the same spot.',
    pills: ['Discussions', 'Direct Messages', 'Group Chats', 'Member Profiles'],
    mockupType: 'chats'
  },
  {
    tag: '03 · No extra tools',
    title: 'Run events and coaching without extra tools',
    description: 'Host workshops, office hours, coaching sessions, live events, and cohort meetings from one platform, without juggling separate scheduling, booking, calendar, or event software.',
    pills: ['Scheduling', 'Booking', 'Live events'],
    mockupType: 'events'
  },
  {
    tag: '04 · Less busywork',
    title: 'Automate the work behind the community',
    description: 'Reduce manual work with workflows for onboarding, engagement, member management, access control, and recurring tasks. Spend less time managing systems and more time supporting members.',
    pills: ['Workflows', 'Onboarding', 'Automation'],
    mockupType: 'automations'
  },
  {
    tag: '05 · Full visibility',
    title: 'Make decisions with real visibility',
    description: 'Track participation, program performance, member activity, and revenue from a single dashboard. Get the insights you need to improve your programs and community.',
    pills: ['Participation', 'Performance', 'Revenue'],
    mockupType: 'analytics'
  },
  {
    tag: '06 · Your earnings',
    title: 'Keep more of your revenue',
    description: 'Zero transaction fees on your product sales. Keep 100% of your earnings. What you make is what you take home.',
    pills: ['0% fees', 'Instant payouts'],
    mockupType: 'payout'
  }
];

const getMockupImage = (type: string) => {
  switch (type) {
    case 'programs':
      return { src: '/9.png', alt: 'Create a Program Mockup' };
    case 'chats':
      return { src: '/3.png', alt: 'Discussions and Chats Mockup' };
    case 'events':
      return { src: '/4.png', alt: 'Create an Event Mockup' };
    case 'automations':
      return { src: '/5.png', alt: 'Welcome Onboarding Automation Workflow Mockup' };
    case 'analytics':
      return { src: '/6.png', alt: 'Community Analytics Mockup' };
    case 'payout':
      return { src: '/7.png', alt: '0% Payout Fee Mockup' };
    default:
      return { src: '/9.png', alt: 'Mockup' };
  }
};

export default function Features() {
  return (
    <section id="features" className="bg-transparent">
      {/* Centered Header Banner */}
      <div className="bg-transparent text-center py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-museo text-dark text-[34px] sm:text-4xl md:text-[42px] leading-snug tracking-wide font-black mb-5">
            The complete online <br className="hidden sm:inline" />
            community platform <span className="text-primary italic">built for learning.</span>
          </h2>
          <p className="text-[17px] sm:text-lg leading-relaxed tracking-wide text-slate-500 max-w-[680px] mx-auto font-medium">
            Vectore empowers you with all the tools you need to build a thriving community around your education business.
          </p>
        </div>
      </div>

      {/* Grid List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col border-t border-slate-200">
          {featuresList.map((feat, idx) => {
            const isEven = idx % 2 === 1;
            const mockup = getMockupImage(feat.mockupType || '');

            return (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-2 items-stretch divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 last:border-b-0"
              >
                {/* Text Column */}
                <div className={`py-6 sm:py-8 md:py-10 px-5 sm:px-8 md:px-10 bg-white flex flex-col justify-center h-full ${isEven ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                  <span className="bg-primary-light text-primary border border-primary/10 px-3 py-1 rounded-full text-xs font-bold w-fit mb-5 mx-auto sm:mx-0">
                    {feat.tag}
                  </span>
                  <h3 className="font-museo text-dark text-[26px] sm:text-3xl md:text-[30px] leading-tight font-black mb-4 text-center sm:text-left">
                    {feat.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed mb-6 font-normal">
                    {feat.description}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    {feat.pills.map((pill, pIndex) => (
                      <span key={pIndex} className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mockup Image Column */}
                <div className={`py-6 sm:py-8 md:py-10 px-5 sm:px-8 md:px-10 bg-slate-50/50 flex items-center justify-center w-full h-full ${isEven ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                  {feat.mockupType === 'analytics' || feat.mockupType === 'payout' ? (
                    <div className="w-full max-w-[420px] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 p-1.5 sm:p-2.5 flex items-center justify-center">
                      <Image 
                        src={mockup.src} 
                        alt={mockup.alt} 
                        width={420} 
                        height={315} 
                        className="w-full h-[180px] sm:h-auto rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-slate-200/40 object-cover object-top bg-white"
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-[420px] rounded-xl border border-slate-200 bg-white overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
                      {/* Browser Title Bar */}
                      <div className="h-8 bg-slate-50 border-b border-slate-150 flex items-center px-3.5 gap-1.5 select-none">
                        <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
                      </div>
                      {/* Browser Content */}
                      <div className="bg-[#F8FAFC] p-1.5 sm:p-2.5 flex items-center justify-center">
                        <Image 
                          src={mockup.src} 
                          alt={mockup.alt} 
                          width={420} 
                          height={315} 
                          className="w-full h-[180px] sm:h-auto rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-slate-200/40 object-cover object-top bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
