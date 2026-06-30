'use client';


export default function Header() {
  const scrollToBottom = () => {
    const bottomSection = document.getElementById('bottom-signup');
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed md:absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-white/90 backdrop-blur-md rounded-full border border-slate-200/80 shadow-md py-3 px-6 z-50 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <rect x="5" y="5" width="14" height="14" rx="3.5" transform="rotate(45 12 12)" fill="#E65100" />
        </svg>
        <span className="font-poppins text-lg font-bold text-dark tracking-tight">Vectore</span>
      </div>
      <button onClick={scrollToBottom} className="bg-primary hover:bg-primary-hover text-white font-poppins text-xs sm:text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-md">
        Claim your spot
      </button>
    </header>
  );
}
