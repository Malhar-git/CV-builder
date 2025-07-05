import React, { useState } from 'react';
import './App.css';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { PersonalInformation } from './components/PersonalInformation';
import { Buttons } from './components/Buttons';
import { HeaderPreview, Preview } from './components/Preview';

export function App() {
  const [formData, setFormData] = useState({
    PersonalInformation: {},
    Experience: [],
    Education: [],
  });
  const [isEditable, setIsEditable] = useState(true);

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <div className="flex-container" style={{ display: "flex",  width: '100vw', height: '100vh' }}>
      <div id="form-pg" style={{flex: 1}}>
        <h2>Personal Information</h2>
        <PersonalInformation formData={formData} setFormData={setFormData} isEditable={isEditable} />
        <h2>Education</h2>
        <Education formData={formData} setFormData={setFormData} isEditable={isEditable} />
        <h2>Experience</h2>
        <Experience formData={formData} setFormData={setFormData} isEditable={isEditable} />
        <br></br>
        <Buttons isEditable={isEditable} onSave={handleSave} onEdit={handleEdit} />
      </div>
      <div id="preview-pg" style={{flex:1}}>
        <HeaderPreview formData={formData} />
        <hr />
        <Preview formData={formData} />
      </div>
    </div>
  );
}

export default App;
