import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string; // Optional href for linking
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  href,
}) => {
  const baseClasses =
    'block flex-1 h-[32px] sm:h-[48px] flex justify-center items-center px-2 text-sm sm:text-base text-primary border-2 border-primary focus:outline-none hover:opacity-80 transition-colors';

  // Render as Link if href exists
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  // Render as button if href is not provided
  return (
    <button className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};
