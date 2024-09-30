import React, { useState } from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ 
    label, 
    id, 
    name, 
    value, 
    onChange, 
    className = '', 
    rows = 5, 
    cols = 20, 
    ...rest 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        className={`w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary bg-transparent peer placeholder-transparent shadow-sm`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        cols={cols}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`cursor-text absolute left-4 text-gray-600 transition-all duration-200 ease-in-out ${
          isFocused || value ? '-top-2.5 text-xs' : 'top-4 text-base'
        } bg-white px-1`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
