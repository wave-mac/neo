'use client';

import Image from 'next/image';

export default function Header() {
  const scrollToBottom = () => {
    const bottomSection = document.getElementById('bottom-signup');
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-6 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo-dark.png" alt="Vectore" width={112} height={28} priority className="h-7 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="font-poppins text-sm font-medium text-dark-light hover:text-primary transition-all duration-300">The Problem</a>
          <a href="#features" className="font-poppins text-sm font-medium text-dark-light hover:text-primary transition-all duration-300">Features</a>
        </nav>
        <button onClick={scrollToBottom} className="bg-primary hover:bg-primary-hover text-white font-poppins text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-300 hover:-translate-y-[1px]">
          Claim Founding Spot
        </button>
      </div>
    </header>
  );
}
