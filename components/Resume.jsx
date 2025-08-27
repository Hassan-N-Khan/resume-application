import "../styles/Resume.css";

function Resume({generalInformation, educationalInformation, workExperience}){
    return (
        <div className="resume">
            <div className="header-information">
                <h1>{generalInformation.firstName} {generalInformation.lastName}</h1>
                <div className="contact-information">
                    <p>{generalInformation.phoneNumber}</p>
                    <p>{generalInformation.emailAddress}</p>
                    <p>{generalInformation.city}</p>
                </div>
            </div>
            <h2 className="education">Education</h2>
            {educationalInformation.map((edu, index) => (
                <div key={index} className="education-card">
                    <div>
                        <p>{edu.schoolName}</p>
                        <p>{edu.degree}</p>
                    </div>
                    <div>
                        <p>Graduated {edu.graduationDate}</p>
                        <p>{edu.graduationCity}</p>
                    </div>
                </div>
            ))}
            <hr></hr>
            <h2 className="work">Work Experience</h2>
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