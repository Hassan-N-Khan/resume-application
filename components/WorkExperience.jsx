import "../styles/WorkExperience.css";

function WorkExperience(){
    return (
        <div className="work-experience">
            <h2>Work Experience</h2>
            <form>
                <label for="company">Company</label>
                <input type="text" id="company" class="company" placeholder="Enter Company" required ></input>

                <label for="position">Position</label>
                <input type="text" id="position" class="position" placeholder="Enter Position" required ></input>

                <label for="location">Location</label>
                <input type="text" id="location" class="location" placeholder="Enter Location" required ></input>
                
                <label for="start-date">Start Date</label>
                <input type="text" id="start-date" class="start-date" placeholder="Enter Start Date" required ></input>

                <label for="end-date">Location</label>
                <input type="text" id="end-date" class="end-date" placeholder="Enter End Date" required ></input>

                <label for="job-description">Enter Job Description</label>
                <input type="textarea" id="job-description" class="job-description" placeholder="Enter Job Description" required ></input>
            </form>
        </div>
    )
}

export default WorkExperience;