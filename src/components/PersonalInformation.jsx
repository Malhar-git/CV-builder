import { StrictMode } from "react";

export function PersonalInformation({ formData, setFormData, isEditable }) {
  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      PersonalInformation: {
        ...formData.PersonalInformation,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <div>
      <input
        name="name"
        value={formData.PersonalInformation.name || ''}
        onChange={handleChange}
        placeholder="Candidate Name"
        disabled={!isEditable}
      />
      
      <input
        name="email"
        value={formData.PersonalInformation.email || ''}
        onChange={handleChange}
        placeholder="Email"
        disabled={!isEditable}
      />
      <input
        name="contactNumber"
        value={formData.PersonalInformation.contactNumber || ''}
        onChange={handleChange}
        placeholder="Contact Number"
        disabled={!isEditable}
      />
    </div>
  );
}