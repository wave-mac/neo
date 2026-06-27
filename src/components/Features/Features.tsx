'use client';

interface FeatureItem {
  tag: string;
  title: string;
  description: string;
}

const featuresList: FeatureItem[] = [
  {
    tag: 'Core',
    title: 'Bring learning and community together',
    description: 'Vectore lets you choose how you want to teach. From self-paced courses, group coaching, cohort-based programs and online workshops. Then build a community experience around your education programs.'
  },
  {
    tag: 'Engagement',
    title: 'Create a community people actually participate in',
    description: 'Keep members engaged with discussion posts, chats, challenges, gamification, member matching, and other interactive experiences that give your members more ways to connect, contribute, and learn from one another.'
  },
  {
    tag: 'All-In-One',
    title: 'Run events and coaching without extra tools',
    description: 'Host workshops, office hours, coaching sessions, live events, and cohort meetings from one platform without needing to juggle separate scheduling, booking, calendar, or event software.'
  },
  {
    tag: 'Automation',
    title: 'Automate the work behind the community',
    description: 'Reduce manual work with workflows for onboarding, engagement, member management, access control, and recurring tasks. Spend less time managing systems and more time supporting members.'
  },
  {
    tag: 'Analytics',
    title: 'Make decisions with real visibility',
    description: 'Track participation, program performance, member activity, and revenue from a single dashboard. Get the insights you need to improve your programs and community.'
  },
  {
    tag: 'Pricing',
    title: 'Keep more of your revenue',
    description: 'Zero transaction fees on your product sales. Keep 100% of your earnings.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-[100px] bg-[radial-gradient(circle_at_bottom_left,rgba(230,81,0,0.03),transparent_60%)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-museo text-3xl sm:text-4xl md:text-[40px] leading-tight font-extrabold text-dark mb-5">
            The community platform built for learning
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-dark-light max-w-[600px] mx-auto">
            Vectore empowers you with all the tools you need to build a thriving community around your education business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {featuresList.map((feat, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col gap-4 shadow-sm hover:-translate-y-1 hover:shadow-premium hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
              <div className="self-start text-xs font-bold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">
                {feat.tag}
              </div>
              <h3 className="font-poppins text-2xl font-bold text-dark">{feat.title}</h3>
              <p className="text-[15px] leading-relaxed text-dark-light">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
