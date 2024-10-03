import Button from "../base/Button";
import FormBase from "../base/FormBase"; // Import the FormBase component
import { CURRENCIES } from "../../utils/constants";
import { FormFieldConfig } from "../base/IFormFieldConfig";
// interface INewFundraiserFormData {
//   name: string;
//   currency: string;
//   payoutAddress: string;
//   amountTarget: number;
//   title: string;
//   description: string;
//   email: string;
//   deadline: string;
// }

const NewFundraiserForm: React.FC = () => {

  const handleSubmit = (values: { [key: string]: string | number }) => {
    console.log("Form data:", values);
  };


  const _deadlineDefault = (): string => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().slice(0, 10); // YYYY-MM-DD format
  };

  const fundraiserFormData: FormFieldConfig[] = [
    {
      name: 'name',
      label: 'Your Name',
      type: 'text',
      validate: (value: string | number) => {
        if (typeof value === 'string') return value.trim() ? null : 'Name is required';
        return 'Invalid value type';
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      validate: (value: string | number) => {
        if (typeof value === 'string') {
          return /\S+@\S+\.\S+/.test(value) ? null : 'Invalid email';
        }
        return 'Invalid value type';
      },
    },
    {
      name: 'currency',
      label: 'Currency',
      type: 'select',
      options: CURRENCIES.map(currency => ({ value: currency[0], label: currency[1] })),
      validate: (value: string | number) => {
        if (typeof value === 'string') return value ? null : 'Currency is required';
        return 'Invalid value type';
      },
    },
    {
      name: 'payoutAddress',
      label: 'Payout Address',
      type: 'text',
      validate: (value: string | number) => {
        if (typeof value === 'string') return value.trim() ? null : 'Payout address is required';
        return 'Invalid value type';
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      validate: (value: string | number) => {
        if (typeof value === 'string') return value.trim() ? null : 'Title is required';
        return 'Invalid value type';
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      validate: (value: string | number) => {
        if (typeof value === 'string') return value.trim() ? null : 'Description is required';
        return 'Invalid value type';
      },
    },
    {
      name: 'amountTarget',
      label: 'Target Amount',
      type: 'number',
      validate: (value: string | number) => {
        const numberValue = Number(value); // Convert value to a number
        return numberValue > 0 ? null : 'Target amount must be greater than 0';
      },
    },
    {
      name: 'deadline',
      label: 'Deadline',
      type: 'date',
      validate: (value: string | number) => {
        if (typeof value === 'string') return value.trim() ? null : 'Deadline is required';
        return 'Invalid value type';
      },
      defaultValue: _deadlineDefault(), // Set the default deadline to 3 months from now
    },
  ];





  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Create a New Fundraiser</h2>

      {/* Use FormBase and pass the fields */}
      <FormBase fields={fundraiserFormData} onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col">
          <Button color="primary" label="Create Fundraiser" type="submit" />
        </div>
      </FormBase>
    </div>
  );
};

export default NewFundraiserForm;




