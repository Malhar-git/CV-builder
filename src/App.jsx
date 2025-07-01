import React, { useState } from 'react';
import './App.css';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { PersonalInformation } from './components/PersonalInformation';
import { Buttons } from './components/Buttons';

export function App() {
  const [formData, setFormData] = useState({ PersonalInformation: {}, Experience: {}, Education: {} });

  const [isEditable, setIsEditable] = useState(true);

  const handleSave = () => {
    console.log('Save DATA:', formData);
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
    console.log('Editing..');
  };

  return (
    <>
      <PersonalInformation formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Education formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Experience formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Buttons isEditable={isEditable} onSave={handleSave} onEdit={handleEdit} />
    </>
  );
}

export default App;
