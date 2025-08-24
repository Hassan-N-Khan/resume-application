import "../styles/Resume.css";

function Resume({generalInformation}){
    return (
        <div className="resume">
            <h2>Resume Information</h2>
            {generalInformation.firstName}
            {generalInformation.lastName}
            {generalInformation.phoneNumber}
            {generalInformation.emailAddress}
            {generalInformation.city}
        </div>
    )
}

export default Resume;