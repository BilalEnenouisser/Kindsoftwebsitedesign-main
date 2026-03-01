import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        {/* Background circle */}
        <circle cx="24" cy="24" r="24" fill="#3B82F6" />
        
        {/* Yellow accent arc */}
        <path
          d="M24 4 C35.046 4 44 12.954 44 24"
          stroke="#FCD34D"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* K letter stylized */}
        <path
          d="M16 14 L16 34 M16 24 L28 14 M16 24 L28 34"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Soft accent dot */}
        <circle cx="32" cy="24" r="3" fill="#FCD34D" />
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
          KindSoft
        </span>
        <span className="text-xs text-gray-600 -mt-1">Web Studio</span>
      </div>
    </motion.div>
  );
}
