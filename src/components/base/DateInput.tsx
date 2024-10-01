
const Bleh: React.FC = () => {
    return <div></div>
}

export default Bleh;

// import React from "react";
// import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Input, { InputProps } from "./Input";

// // Define DateInputProps, omitting 'value', 'onChange', and 'type' from InputProps
// interface DateInputProps extends Omit<InputProps, "value" | "onChange" | "type"> {
//   value?: Date;
//   onChange: (value: Date) => void;
// }

// const DateInput: React.FC<DateInputProps> = ({ value, onChange, placeholder, className, label, id, name, ...rest }) => {
//   // Format the Date object into a string (e.g., "YYYY-MM-DD")
//   const formattedValue = value ? value.toISOString().split("T")[0] : "";

//   return (
//     <Flatpickr
//       value={value}
//       onChange={(selectedDates) => {
//         if (selectedDates.length > 0) {
//           onChange(selectedDates[0]);
//         }
//       }}
//       options={{
//         dateFormat: "Y-m-d",
//       }}
//       render={({ defaultValue, value, ...flatpickrProps }, ref) => (
//         <Input
//           type="text" // Keep the input type as text because Flatpickr will handle the date
//           value={formattedValue}
//           className={className}
//           label={label}
//           id={id}
//           name={name}
//           placeholder={placeholder}
//           {...flatpickrProps} // Spread Flatpickr's props without overriding onChange
//         />
//       )}
//     />
//   );
// };

// export default DateInput;
