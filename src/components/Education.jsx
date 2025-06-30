export function Education({formData, setFormData}){
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
      />
      <input
        name="fieldOfStudy"
        value={formData.Education.fielOfStudy || ''}
        onChange={handleChange}
        placeholder="fielOfStudy"
      />
      <input
        name="date"
        value={formData.Education.date || ''}
        onChange={handleChange}
        placeholder="date of study"
      />
    </div>
  )

}