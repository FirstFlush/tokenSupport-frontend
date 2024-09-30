import { useState } from "react";
import Input from "../base/Input";
import Select from "../base/Select";
import TextArea from "../base/TextArea";
import { CURRENCIES } from "../../utils/constants";
import Button from "../base/Button";


interface INewFundraiserFormData {
    name: string;
    currency: string;
    payoutAddress: string;
    amountTarget: number;
    title: string;
    description: string;
    email: string;
    deadline: string;
}


const NewFundraiserForm:React.FC = () => {


  const _deadlineDefault = (): string => {  
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().slice(0, 10);  // YYYY-MM-DD format
  }


    const [formData, setFormData] = useState<INewFundraiserFormData>({
      name: '',
      currency: '',
      payoutAddress: '',
      amountTarget: 0,
      title: '',
      description: '',
      email: '',
      deadline: _deadlineDefault(),
    })



    const currencyOptions = (): { value: string | number; label: string }[] => {
      return CURRENCIES.map((currency) => {
        
        return { value: currency[0], label: currency[1]}
      });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
    
      setFormData((prev) => ({
        ...prev,
        [name]: name === 'amountTarget' ? (value === '' ? '' : Number(value)) : value,  // Handle number conversion
      }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e)
        console.log('form data:')
        console.log(formData);
    }


    return (
        <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Create a New Fundraiser</h2>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <Input 
                label="Your name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <Input 
                label="Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />
            </div>
            <div className="my-4">
              <Select 
                label="Currency"
                name="currency"
                id="currency"
                value={formData.currency}
                onChange={handleSelectChange}
                options={currencyOptions()}
                required
              />
            </div>
            <div className="my-4">
              <Input 
                label="Address"
                id="address"
                name="payoutAddress"
                value={formData.payoutAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <Input
                label="Title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <TextArea 
                label="Description"
                name="description"
                value={formData.description}
                id="description"
                onChange={handleChange}
                rows={7}
                cols={20}
                required
              />
            </div>
            <div className="my-4">
              <Input 
                label="Target amount"
                name="amountTarget"
                id="amount-target"
                type="number"
                value={formData.amountTarget}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <Input
                label="Deadline"
                name="deadline"
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center flex-col">
              <Button 
                color="primary"
                label="Create Fundraiser"
                onSubmit={handleSubmit}
              />
            </div>
          </form>
        </div>
      );
}

export default NewFundraiserForm;