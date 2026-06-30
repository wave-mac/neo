'use client';


export default function Footer() {
  return (
    <footer className="py-10 bg-[#bf6527] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <rect x="5" y="5" width="14" height="14" rx="3.5" transform="rotate(45 12 12)" fill="#ffffff" />
            </svg>
            <span className="font-poppins text-base font-bold text-white tracking-tight">vectore</span>
          </div>
          <p className="text-xs sm:text-sm text-white/80">
            © {new Date().getFullYear()} Vectore. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center text-xs sm:text-sm font-semibold tracking-wide">
            <a href="#" className="text-white hover:text-white/80 transition-all duration-300">Privacy Policy</a>
            <a href="mailto:hello@vectore.learn" className="text-white hover:text-white/80 transition-all duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
