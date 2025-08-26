import "../styles/Resume.css";

function Resume({generalInformation, educationalInformation}){
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
        </div>
    )
}

export default Resume;