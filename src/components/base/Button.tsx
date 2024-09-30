import React from 'react';

type Color = "primary" | "secondary" | "white" | "warning"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: Color;
  className?: string;
}


const Button: React.FC<ButtonProps> = ({ label, className = '', color = 'primary', ...rest }) => {
    const colorClasses = {
      primary: 'bg-highlight text-white hover:bg-primary-dark focus:ring-highlight',
      secondary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary-light',
      white: 'bg-white text-primary hover:bg-gray-100 border border-primary focus:ring-primary-light',
      warning: 'bg-red-500 text-white hover:bg-red-600 focus:ring-warning-light'
    };
  
    return (
      <button
        className={`${colorClasses[color]} relative uppercase tracking-wider font-bold py-4 px-6 rounded-lg 
        overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 
        active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4  
        before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r 
        before:from-white before:via-transparent before:to-white before:opacity-20 before:transition-transform 
        before:duration-500 before:ease-in-out before:transform before:skew-x-12 before:-translate-x-full 
        hover:before:translate-x-full ${className}`}
        {...rest}
      >
        {label}
      </button>
    );
  };
  
  export default Button;