import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  return (
    <div className="calendar">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        minDate={new Date("1995-06-16")}
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default Calendar;
