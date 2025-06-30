import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function Experience() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <form>
      <input type="text" id="companyName" placeholder="Company Name" />
      <input type="text" id="position" placeholder="Position" />
      <input type="text" id="responsibilities" placeholder="Responsibilities" />
      <input
        type="text"
        readOnly
        value={`${dateRange[0].startDate.toLocaleDateString()} to ${dateRange[0].endDate.toLocaleDateString()}`}
      />
      <DateRange
        onChange={item => setDateRange([item.selection])}
        ranges={dateRange}
      />
    </form>
  );
}
