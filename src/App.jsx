import React, { useState } from 'react';
import './App.css';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { PersonalInformation } from './components/PersonalInformation';
import { Buttons } from './components/Buttons';
import { HeaderPreview, Preview } from './components/Preview';

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
    <div style={{display: "flex", gap: '2rem'}}>
      <div style={{flex: 1}}>
      <PersonalInformation formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Education formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Experience formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Buttons isEditable={isEditable} onSave={handleSave} onEdit={handleEdit} />
      </div>
    </div>
    <div style={{flex:1, border: '1px solid #ccc', padding: '1rem'}}>
      <HeaderPreview formData={formData}></HeaderPreview>
      <Preview formData={formData}></Preview>
    </div>
    </>
  );
}

export default App;
