'use client';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-0">
          <div className="flex items-center gap-1.5 font-museo font-extrabold text-lg text-dark">
            <div className="w-2 h-2 rounded-[2px] bg-primary rotate-45"></div>
            Vectore
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            © {new Date().getFullYear()} Vectore. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-primary transition-all duration-300">Privacy Policy</a>
            <a href="mailto:hello@vectore.learn" className="text-xs sm:text-sm text-slate-500 hover:text-primary transition-all duration-300">Contact Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
