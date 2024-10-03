import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

interface FormField {
  name: string;
  label: string;
  type: string;
  validate?: (value: string | number) => string | null; // Validation function that returns an error message or null
  options?: { value: string | number; label: string }[]; // For Select component
  defaultValue?: string | number;
  required?: boolean; // Optional, will default to true if not provided
}

interface FormBaseProps {
  fields: FormField[];
  onSubmit: (values: { [key: string]: string | number }) => void;
  children?: React.ReactNode;
}

const FormBase: React.FC<FormBaseProps> = ({ fields, onSubmit, children }) => {
  const [values, setValues] = useState<{ [key: string]: string | number }>({});
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string | null } = {};

    fields.forEach((field) => {
      const value = values[field.name] || field.defaultValue || '';
      
      // Default required to true if not explicitly provided
      const isRequired = field.required !== undefined ? field.required : true;

      // Only validate if the field is required or if it has a value (for optional fields)
      if (isRequired || value) {
        const error = field.validate ? field.validate(value) : null;
        if (error) {
          newErrors[field.name] = error;
        }
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="my-4">
          {field.type === 'textarea' ? (
            <TextArea
              id={field.name}
              name={field.name}
              label={field.label}
              value={String(values[field.name] || field.defaultValue || '')} // Convert value to string
              onChange={handleChange}
              required={field.required !== undefined ? field.required : true} // Default to true if required is not provided
            />
          ) : field.type === 'select' ? (
            <Select
              id={field.name}
              name={field.name}
              label={field.label}
              value={values[field.name] || field.defaultValue || ''}
              onChange={handleChange}
              options={field.options || []}
              required={field.required !== undefined ? field.required : true} // Default to true if required is not provided
            />
          ) : (
            <Input
              id={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              value={values[field.name] || field.defaultValue || ''}
              onChange={handleChange}
              required={field.required !== undefined ? field.required : true} // Default to true if required is not provided
            />
          )}

          {errors[field.name] && <p className="text-red-500">{errors[field.name]}</p>}
        </div>
      ))}

      {children}
    </form>
  );
};

export default FormBase;
