import "../styles/EducationalInformation.css";

function EducationalInformation({ educationalInformation, setEducationalInformation }) {
  const addEducation = () => {
    const newEducation = {
      schoolName: "",
      degree: "",
      graduationDate: "",
      graduationCity: "",
    };
    setEducationalInformation((prev) => [...prev, newEducation]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setEducationalInformation((prev) => {
      const updated = [...prev];
      updated[index][name] = value;
      return updated;
    });
  };

  const deleteEducation = (indexToDelete)=>{
    setEducationalInformation((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="educational-information">
      <h2>Educational Information</h2>

      <button
        type="button"
        className="add-educational-information"
        onClick={(e) => {
          e.stopPropagation();
          addEducation();
        }}
      >
        Add Education
      </button>

      {educationalInformation.map((edu, index) => (
        <form key={index} className="education-form">
          <label htmlFor={`school-${index}`}>School</label>
          <input
            type="text"
            id={`school-${index}`}
            name="schoolName"
            value={edu.schoolName}
            onChange={(e) => handleChange(index, e)}
            required
          />

          <label htmlFor={`degree-${index}`}>Degree</label>
          <input
            type="text"
            id={`degree-${index}`}
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            required
          />

          <label htmlFor={`graduation-date-${index}`}>Graduation Date</label>
          <input
            type="text"
            id={`graduation-date-${index}`}
            name="graduationDate"
            value={edu.graduationDate}
            onChange={(e) => handleChange(index, e)}
            required
          />

          <label htmlFor={`graduation-city-${index}`}>City</label>
          <input
            type="text"
            id={`graduation-city-${index}`}
            name="graduationCity"
            value={edu.graduationCity}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <button type="button" className="delete-education" 
            onClick={(e) => {
                e.stopPropagation();
                deleteEducation(index);
            }}
          >Delete Education</button>
        </form>
      ))}
    </div>
  );
}

export default EducationalInformation;
