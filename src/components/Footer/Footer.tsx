'use client';

export default function Footer() {
  return (
    <footer className="py-10 bg-primary text-white">
      <div className="max-w-[1200px] mx-auto px-[2px] sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="flex items-center">
            <img src="/logo-light.png" alt="Vectore" className="h-6 w-auto" />
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
