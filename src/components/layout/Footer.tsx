export const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 border-t border-[#D7E2EA]/10 bg-[#0C0C0C] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm tracking-wide uppercase">
          © {new Date().getFullYear()} Aarya. All rights reserved.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] font-light tracking-wide uppercase transition-colors">Privacy Policy</a>
          <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] font-light tracking-wide uppercase transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
