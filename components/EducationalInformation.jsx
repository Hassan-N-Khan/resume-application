import "../styles/EducationalInformation.css";

function EducationalInformation(){
    return (
        <div className="educational-information">
            <h2>Educational Information</h2>
            <button className="add-educational-information" onClick={(e) => { e.stopPropagation(); addEducationEntry(); }} >Add Education</button>
            <form>
                <label for="school">School</label>
                <input type="text" id="school" class="school" placeholder="Enter School" required ></input>

                <label for="degree">Degree</label>
                <input type="text" id="degree" class="degree" placeholder="Enter Degree" required ></input>

                <label for="graduation-date">Graduation Date</label>
                <input type="date" id="graduation-date" class="graduation-date" required ></input>

                <label for="graduation-city">Enter City</label>
                <input type="text" id="graduation-city" class="graduation-city" placeholder="Enter City" required ></input>
            </form>
        </div>
    )
}

export default EducationalInformation;