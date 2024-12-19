'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`flex items-center text-secondary dark:text-white hover:opacity-60 focus:outline-none ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 19a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 19z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm font-medium">Back</span>
    </button>
  );
};

export default BackButton;
