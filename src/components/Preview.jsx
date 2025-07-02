import "../App.css";

export function HeaderPreview({formData}){
    const {PersonalInformation} = formData;
    return (
        <div id="preview-header">
            {PersonalInformation.name && (<h1 className= "font-bold text-center">{PersonalInformation.name}</h1>)}
            <div className="flex justify-center items-center gap-5 flex-wrap">
                <div className="flex items-center gap-1">
                    <p>{PersonalInformation.contactNumber}</p>
                </div>
                <div className="flex items-center gap-1">
                    <p>{PersonalInformation.email}</p>
                </div>
            </div>
        </div>
    )
}
export function Preview({formData}){
    const {Education, Experience} = formData;
    return(
        <div id="preview">
            <div>
                {Education.schoolName && (<b className="font-itallic text-align-left">{Education.schoolName}</b>)}
                <div className="flex justify-center items-left gap-5 flex-wrap">
                    <div className="flex items-center gap-1">
                        <p>{Education.fieldOfStudy}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p>{Education.date}</p>
                    </div>
                </div> 
            </div>
            <div>
                {Experience.companyName && (<b className="font-itallic text-align-left">{Experience.companyName}</b>)}
                <div className="flex justify-center items-left gap-5 flex-wrap">
                    <div className="flex items-center gap-1">
                        <p>{Experience.position}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p>{Experience.responsibilities}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p>{Experience.datePeriod}</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}