import React, { useState } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  options: { value: string | number; label: string }[]; // Array of options to render
}

const Select: React.FC<SelectProps> = ({ label, id, name, value, onChange, className = '', options, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <select
        className={`shadow-md w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary bg-transparent appearance-none peer`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`cursor-text absolute left-4 text-gray-600 transition-all duration-200 ease-in-out ${isFocused || value ? '-top-2.5 text-xs' : 'top-4 text-base'} bg-white px-1`}
      >
        {label}
      </label>
      {/* Custom dropdown icon */}
      <span className="text-xs absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default Select;
