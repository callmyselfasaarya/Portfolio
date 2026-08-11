import React from 'react';

interface LiveProjectButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ 
  children = "Live Project", 
  className = "", 
  href = "#",
  ...props 
}) => {
  return (
    <a
      href={href}
      target={href && href !== '#' ? '_blank' : undefined}
      rel={href && href !== '#' ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-all hover:bg-[#D7E2EA] hover:text-[#0C0C0C] hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
