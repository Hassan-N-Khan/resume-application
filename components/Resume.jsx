import "../styles/Resume.css";

function Resume({generalInformation, educationalInformation, workExperience}){
    return (
        <div className="resume">
            <h2>General Information</h2>
            {generalInformation.firstName}
            {generalInformation.lastName}
            {generalInformation.phoneNumber}
            {generalInformation.emailAddress}
            {generalInformation.city}
            <br></br>
            <hr></hr>
            <h2>Educational Information</h2>
            {educationalInformation.map((edu, index) => (
                <div key={index} className="education-card">
                <p><strong>School:</strong> {edu.schoolName}</p>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Graduation Date:</strong> {edu.graduationDate}</p>
                <p><strong>City:</strong> {edu.graduationCity}</p>
                </div>
            ))}
            <br></br>
            <hr></hr>
            <h2>Work Experience</h2>
            {workExperience.map((work, index) => (
                <div key={index} className="work-card">
                <p><strong>Company:</strong> {work.companyName}</p>
                <p><strong>Position:</strong> {work.position}</p>
                <p><strong>Start Date:</strong> {work.startDate}</p>
                <p><strong>End Date:</strong> {work.endDate}</p>
                <p><strong>Location:</strong> {work.location}</p>
                <p><strong>Description:</strong> {work.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Resume;