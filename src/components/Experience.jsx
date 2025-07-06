import React, { useEffect} from 'react';

export default function Experience({ formData, setFormData, isEditable }) {
  const expInput = formData.Experience[formData.Experience.length - 1] || {
    companyName: '',
    position: '',
    responsibilities: '',
    datePeriod: '',
    keyLearnings: ''
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = [...prev.Experience];
      if (updated.length === 0) {
        updated.push({ companyName: "", position: "", responsibilities: "", datePeriod: "", keyLearnings: "" });
      }
      updated[updated.length - 1] = { ...updated[updated.length - 1], [name]: value };
      return { ...prev, Experience: updated };
    });
  };

  const handleAddExperience = () => {
    setFormData(prev =>({
      ...prev, 
      Experience: [...prev.Experience, {companyName: "", position: "", responsibilities: "", datePeriod: "", keyLearnings: ""}]
    }))  
  };

  useEffect(()=>{
    if(formData.Experience.length === 0){
      setFormData(prev =>({
        ...prev,
        Experience: [{companyName: "", position: "", responsibilities: "", datePeriod: "", keyLearnings: ""}]
      }));
    }
  }, [formData.Experience.length, setFormData]);

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
        <input
          name="keyLearnings"
          value={expInput.keyLearnings}
          onChange={handleChange}
          placeholder='Key Learnings'
          disabled={!isEditable}
        />
      </form>
      <button type="button" onClick={handleAddExperience} disabled={!isEditable}>
        Add New
      </button>
    </div>
  );
}
