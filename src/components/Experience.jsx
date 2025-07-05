import React, { useState } from 'react';

export default function Experience({setFormData, isEditable }) {
  const [expInput, setExpInput] = useState({
    companyName: '',
    position: '',
    responsibilities: '',
    datePeriod: ''
  });

  const handleChange = (e) => {
    setExpInput({ ...expInput, [e.target.name]: e.target.value });
  };

  const handleAddExperience = () => {
    if (
      expInput.companyName.trim() ||
      expInput.position.trim() ||
      expInput.responsibilities.trim() ||
      expInput.datePeriod.trim()
    ) {
      setFormData(prev => ({
        ...prev,
        Experience: [...prev.Experience, expInput]
      }));
      setExpInput({ companyName: '', position: '', responsibilities: '', datePeriod: '' });
    }
  };

  return (
    <div>
      <form>
        <input
          name="companyName"
          value={expInput.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          disabled={!isEditable}
        />
        <input
          name="position"
          value={expInput.position}
          onChange={handleChange}
          placeholder="Position"
          disabled={!isEditable}
        />
        <input
          name="responsibilities"
          value={expInput.responsibilities}
          onChange={handleChange}
          placeholder="Responsibilities"
          disabled={!isEditable}
        />
        <input
          name="datePeriod"
          value={expInput.datePeriod}
          onChange={handleChange}
          placeholder="Date Period"
          disabled={!isEditable}
        />
      </form>
      <button type="button" onClick={handleAddExperience} disabled={!isEditable}>
        Add New
      </button>
    </div>
  );
}
