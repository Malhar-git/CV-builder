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

  const [educationCount, setEducationCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  const handleAddEducation = () => setEducationCount(prev => prev + 1);
  const handleAddExperience = () => setExperienceCount(prev => prev + 1);

  const handleSave = () => {
    console.log('Save DATA:', formData);
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
    console.log('Editing..');
  };

  return (
    <div className="flex-container" style={{display: "flex", gap: '2rem'}}>
    <div id="form-pg" style={{flex: 1}}>
      <div style={{flex: 1}}>
      <h2>Personal Information</h2>
      <PersonalInformation formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <h2>Education</h2>
      <Education formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <h2>Experience</h2>
      <Experience formData={formData} setFormData={setFormData} isEditable={isEditable} />
      <Buttons isEditable={isEditable} onSave={handleSave} onEdit={handleEdit} />
      </div>
    </div>
    <div id="preview-pg" style={{flex:1}}>
      <HeaderPreview formData={formData}></HeaderPreview>
      <hr></hr>
      <Preview
        formData={formData}
        educationCount={educationCount}
        experienceCount={experienceCount}
        onAddEducation={handleAddEducation}
        onAddExperience={handleAddExperience}
      />
    </div>
    </div>
  );
}

export default App;
