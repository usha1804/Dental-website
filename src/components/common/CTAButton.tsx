import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to: string;
  className?: string;
  primary?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, to, className = '', primary = true }) => {
  return (
    <Link
      to={to}
      className={`
        inline-block px-6 py-3 rounded-md font-medium transition-all duration-200
        ${primary 
          ? 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-md hover:shadow-lg' 
          : 'bg-white text-cyan-600 border border-cyan-600 hover:bg-cyan-50'
        }
        ${className}
      `}
    >
      {text}
    </Link>
  );
};

export default CTAButton;