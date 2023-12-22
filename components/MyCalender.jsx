"use client"

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';



const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    const { start, end, action } = slotInfo;

    if (action === 'select') {
      
      if (moment(start).isSame(end, 'day')) {
        setSelectedDate(start);
        console.log('Selected Date:', start);
      } else {
        
        console.log('Please select only one day.');
      }
    }
  };

  

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[]} // Assuming events array is empty or you have your events
        selectable={true} // Enable date selection
        onSelectSlot={handleSelectSlot} // Callback when a slot (date range) is selected
        startAccessor="start"
        endAccessor="end"
        style={{ height: 320 }}
        
        longPressThreshold={0}// Allows single-day selection without dragging for mobile devices
      />
      
    </div>
  );
};

export default MyCalendar;
