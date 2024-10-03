import React, { useState } from 'react';

// Define valid input types
// type InputType = "text" | "number" | "email" | "password" | "tel" | "url" | "search" | "date" | "hidden" | "color" | "button" | "checkbox" | "datetime-local" | "file" | "image" | "month" | "radio" | "range" | "reset" | "submit" | "time" | "week";
type InputType = React.HTMLInputTypeAttribute;


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: InputType;  // Optional, defaults to 'text'
}

const Input: React.FC<InputProps> = ({ label, id, name, value, onChange, className = '', type = 'text', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}  
        className={`w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary peer bg-transparent placeholder-transparent`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`cursor-text absolute select-none left-4 text-gray-600 transition-all duration-200 ease-in-out ${
          isFocused || value ? '-top-2.5 text-xs' : 'top-4 text-base'
        } bg-white px-1`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;



