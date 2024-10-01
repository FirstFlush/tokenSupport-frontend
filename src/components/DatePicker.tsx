import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DatePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Flatpickr
      data-enable-time
      value={date}
      onChange={(selectedDates) => setDate(selectedDates[0])}
      options={{
        dateFormat: "Y-m-d",
      }}
    />
  );
};

export default DatePicker;
