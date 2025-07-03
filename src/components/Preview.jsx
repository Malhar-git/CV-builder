import "../App.css";
import styles from "../styles/preview.module.css";

export function HeaderPreview({formData}) {
    const {PersonalInformation} = formData;
    return (
        <div id="preview-header">
            {PersonalInformation.name && (<h1 className="font-bold text-center">{PersonalInformation.name}</h1>)}
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <div>{PersonalInformation.email}</div>
                <div>{PersonalInformation.contactNumber}</div>
            </div>
        </div>
    );
}

export function Preview({
  formData,
  educationCount,
  experienceCount,
  onAddEducation,
  onAddExperience
}) {
  const { Education, Experience } = formData;
  const educationSections = Array.from({ length: educationCount });
  const personalExperience = Array.from({ length: experienceCount });

  return (
    <div className={styles.preview}>
      {educationSections.map((_, idx) => (
        <div id="education" key={idx}>
          <h2><u>Education</u></h2>
          {Education.schoolName && (<b>{Education.schoolName}</b>)}
          <div>
            <p>{Education.fieldOfStudy}</p>
            <p>{Education.date}</p>
          </div>
          {idx === educationSections.length - 1 && (
            <div className="button-education">
              <button type="button" onClick={onAddEducation}>Add New</button>
            </div>
          )}
        </div>
      ))}
      {personalExperience.map((_, ptr) => (
        <div id="personalExperience" key={ptr}>
          <h2><u>Personal Experience</u></h2>
          {Experience.companyName && (<b>{Experience.companyName}</b>)}
          <div>
            <p>{Experience.position}</p>
            <p>{Experience.responsibilities}</p>
            <p>{Experience.datePeriod}</p>
          </div>
          {ptr === personalExperience.length - 1 && (
            <div className="button-experience">
              <button type="button" onClick={onAddExperience}>Add New</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}