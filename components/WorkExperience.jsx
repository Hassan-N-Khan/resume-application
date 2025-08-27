import "../styles/WorkExperience.css";

function WorkExperience({workExperience, setWorkExperience}){
    const addWork = () => {
    const newWork = {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
    };
        setWorkExperience((prev) => [...prev, newWork]);
    };

    const deleteWork = (indexToDelete)=>{
        setWorkExperience((prev) =>
            prev.filter((_, index) => index !== indexToDelete)
        );
    }

    const handleChange = (index,e)=>{
        const { name, value } = e.target;
        setWorkExperience((prev) => {
            const updated = [...prev];
            updated[index][name] = value;
            return updated;
        });
    }

    return (
        <div className="work-experience">
            <h2>Work Experience</h2>
        <button
                type="button"
                className="add-work-experience"
                onClick={(e) => {
                    e.stopPropagation();
                    addWork();
                }}
            >
                Add Work
        </button>
            {workExperience.map((work,index)=> (
            <form key={index} className="work-experience-form">
                <label htmlFor={`company-${index}`}>Company</label>
                <input type="text" id={`company-${index}`} class="company" name="companyName" value={work.companyName} onChange={(e) => handleChange(index, e)} required ></input>

                <label htmlFor={`position-${index}`}>Position</label>
                <input type="text" id={`position-${index}`} class="position" name="position" value={work.position} onChange={(e) => handleChange(index, e)} required ></input>

                <label htmlFor={`start-date-${index}`}>Start Date</label>
                <input type="text" id={`start-date-${index}`} class="start-date" name="startDate" value={work.startDate} onChange={(e) => handleChange(index, e)} required ></input>
                
                <label htmlFor={`end-date-${index}`}>End Date</label>
                <input type="text" id={`end-date-${index}`} class="end-date" name="endDate" value={work.endDate} onChange={(e) => handleChange(index, e)} required ></input>

                <label htmlFor={`location-${index}`}>Location</label>
                <input type="text" id={`location-${index}`} class="location" name="location" value={work.location} onChange={(e) => handleChange(index, e)} required ></input>

                <label htmlFor={`job-description-${index}`}>Enter Job Description</label>
                <input type="textarea" id={`job-description-${index}`} class="job-description" name="description" value={work.description} onChange={(e) => handleChange(index, e)} required ></input>

                <button type="button" className="delete-education" 
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteWork(index);
                    }}
                >Delete Education</button>
            </form>
            ))}
        </div>
    )
}

export default WorkExperience;