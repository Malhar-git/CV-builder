import React, { useState, useRef } from 'react';
import './App.css';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { PersonalInformation } from './components/PersonalInformation';
import { Buttons } from './components/Buttons';
import { HeaderPreview, Preview } from './components/Preview';
import html2pdf from 'html2pdf.js';

export function App() {
  const [formData, setFormData] = useState({
    PersonalInformation: {},
    Experience: [],
    Education: [],
  });
  const [isEditable, setIsEditable] = useState(true);

  const previewRef = useRef(); // Ref to target the preview section

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleDownloadPDF = () => {
    const element = previewRef.current;
    const opt = {
      margin: 0.5,
      filename: 'cv-preview.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex-container" style={{ display: "flex", width: '100vw', height: '100vh'}}>
      <div style={{ paddingRight: '20px' }}>
        <h1><b><u>CV Form</u></b></h1>
        <div id="form-pg" style={{ flex: 1 }}>
          <h2>Personal Information</h2>
          <PersonalInformation formData={formData} setFormData={setFormData} isEditable={isEditable} />
          <h2>Education</h2>
          <Education formData={formData} setFormData={setFormData} isEditable={isEditable} />
          <h2>Experience</h2>
          <Experience formData={formData} setFormData={setFormData} isEditable={isEditable} />
          <br />
          <Buttons isEditable={isEditable} onSave={handleSave} onEdit={handleEdit} />
          <br />
          {/* Add Download PDF button here */}
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      </div>

      <div>
        <h1><b><u>Preview Page</u></b></h1>
        <div ref={previewRef} id="preview-pg" style={{ flex: 1, padding: '20px', background: '#ffffff' }}>
          <HeaderPreview formData={formData} />
          <hr />
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
