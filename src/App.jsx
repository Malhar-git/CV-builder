import React, { useState } from 'react';
import './App.css';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { PersonalInformation } from './components/PersonalInformation';
import { Buttons } from './components/Buttons';

function App() {
  const [formData, setFormData] = useState({ PersonalInformation: {}, Experience: {}, Education: {} });

  const handleSave = () => {
    console.log('Save DATA:', formData);
  };

  const handleEdit = () => {
    console.log('Editing..');
  };

  return (
    <>
      <PersonalInformation formData={formData} setFormData={setFormData} />
      <Education formData={formData} setFormData={setFormData} />
      <Experience formData={formData} setFormData={setFormData} />
      <Buttons onSave={handleSave} onEdit={handleEdit} />
    </>
  );
}

export default App;
