export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-[#D7E2EA]/10 bg-[#0C0C0C] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#D7E2EA]/60 font-light text-sm tracking-wide uppercase">
          © {new Date().getFullYear()} Aarya. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-[#D7E2EA]/60 hover:text-[#D7E2EA] font-light tracking-wide uppercase transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-[#D7E2EA]/60 hover:text-[#D7E2EA] font-light tracking-wide uppercase transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
