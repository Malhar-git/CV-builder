import React from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function Experience({ formData, setFormData, isEditable }) {
  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      Experience: {
        ...formData.Experience,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleDateChange = (item) => {
    setFormData({
      ...formData,
      Experience: {
        ...formData.Experience,
        startDate: item.selection.startDate,
        endDate: item.selection.endDate
      }
    });
  };

  const dateRange = [
    {
      startDate: formData.Experience.startDate || new Date(),
      endDate: formData.Experience.endDate || new Date(),
      key: 'selection'
    }
  ];

  return (
    <form>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.Experience.companyName || ''}
        onChange={handleChange}
        disabled={!isEditable}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.Experience.position || ''}
        onChange={handleChange}
        disabled={!isEditable}
      />
      <input
        type="text"
        name="responsibilities"
        placeholder="Responsibilities"
        value={formData.Experience.responsibilities || ''}
        onChange={handleChange}
        disabled={!isEditable}
      />
      <input
        type="text"
        readOnly
        value={`${dateRange[0].startDate.toLocaleDateString()} to ${dateRange[0].endDate.toLocaleDateString()}`}
        disabled={!isEditable}
      />
      {isEditable ? (
        <DateRange onChange={handleDateChange} ranges={dateRange} />
      ) : (
        <div style={{ background: '#f0f0f0', borderRadius: '4px' }}>
          {dateRange[0].startDate.toLocaleDateString()} to {dateRange[0].endDate.toLocaleDateString()}
        </div>
      )}
    </form>
  );
}
