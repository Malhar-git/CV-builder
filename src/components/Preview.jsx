import "../App.css";

export function HeaderPreview({formData}) {
    const {PersonalInformation} = formData;
    return (
        <div id="preview-header">
            {PersonalInformation.name && (
                <h1 className="font-bold text-center">{PersonalInformation.name}</h1>
            )}
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <div>
                    Email{PersonalInformation.email ? `: ${PersonalInformation.email}` : ""}
                </div>
                <div>
                    Phone{PersonalInformation.contactNumber ? `: ${PersonalInformation.contactNumber}` : ""}
                </div>
            </div>
        </div>
    );
}

export function Preview({ formData }) {
  const { Education = [], Experience = [] } = formData;
  return (
    <div>
      <div id="education">
        <h2><u>Education</u></h2>
        {Education.map((edu, idx) => (
          <div key={idx}>
            {edu.schoolName && <b>{edu.schoolName}</b>}
            <p>{edu.fieldOfStudy}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </div>
      <div id="personalExperience">
        <h2><u>Personal Experience</u></h2>
        {Experience.map((exp, idx) => (
          <div key={idx}>
            {exp.companyName && <b>{exp.companyName}</b>}
            <p>{exp.position}</p>
            <p>{exp.responsibilities}</p>
            <p>{exp.datePeriod}</p>
          </div>
        ))}
      </div>
    </div>
  );
}