export function Education({formData, setFormData, isEditable}){
  const handleChange = (e) => {
    setFormData({
      ...formData,
      Education: {
        ...formData.Education,
        [e.target.name]: e.target.value
      }
    });
  };
  return(
    <div>
      <input
        name="schoolName"
        value={formData.Education.schoolName || ''}
        onChange={handleChange}
        placeholder="School Name"
        disabled={!isEditable}
      />
      <input
        name="fieldOfStudy"
        value={formData.Education.fieldOfStudy || ''}
        onChange={handleChange}
        placeholder="fiedlOfStudy"
        disabled={!isEditable}
      />
      <input
        name="date"
        value={formData.Education.date || ''}
        onChange={handleChange}
        placeholder="date of study"
        disabled={!isEditable}
      />
    </div>
  )

}