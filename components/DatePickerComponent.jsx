import React, {useState, forwardRef} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = ({children}) => {
    const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {children}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  )
}

export default DatePickerComponent