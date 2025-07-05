import { useEffect } from "react";

export function Education({ formData, setFormData, isEditable }) {
  const eduInput = formData.Education[formData.Education.length - 1] || {
    schoolName: "",
    fieldOfStudy: "",
    date: ""
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = [...prev.Education];
      if (updated.length === 0) updated.push({ schoolName: "", fieldOfStudy: "", date: "" });
      updated[updated.length - 1] = { ...updated[updated.length - 1], [name]: value };
      return { ...prev, Education: updated };
    });
  };

  const handleAddEducation = () => {
    setFormData(prev => ({
      ...prev,
      Education: [...prev.Education, { schoolName: "", fieldOfStudy: "", date: "" }]
    }));
  };

  useEffect(() => {
    if (formData.Education.length === 0) {
      setFormData(prev => ({
        ...prev,
        Education: [{ schoolName: "", fieldOfStudy: "", date: "" }]
      }));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <form>
        <input
          name="schoolName"
          value={eduInput.schoolName}
          onChange={handleChange}
          placeholder="School Name"
          disabled={!isEditable}
        />
        <input
          name="fieldOfStudy"
          value={eduInput.fieldOfStudy}
          onChange={handleChange}
          placeholder="Field of Study"
          disabled={!isEditable}
        />
        <input
          name="date"
          value={eduInput.date}
          onChange={handleChange}
          placeholder="Date of Study"
          disabled={!isEditable}
        />
      </form>
      <button type="button" onClick={handleAddEducation} disabled={!isEditable}>
        Add New
      </button>
    </div>
  );
}