// Define the structure of each field in the form
export interface FormFieldConfig {
    name: string; // Name of the form field (used as the field's key)
    label: string; // Label displayed next to the form field
    type: string; // Field type, e.g., 'text', 'email', 'number', 'select', 'textarea', etc.
    validate?: (value: string | number) => string | null; // Optional validation function that returns an error message or null
    options?: { value: string | number; label: string }[]; // Optional, for select fields (dropdown options)
    defaultValue?: string | number; // Optional default value for the field
    required?: boolean;
  }
  