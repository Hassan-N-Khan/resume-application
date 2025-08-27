import { useState } from 'react'
import './App.css'
import GeneralInformation from '../components/GeneralInformation'
import EducationalInformation from '../components/EducationalInformation'
import WorkExperience from '../components/WorkExperience'
import Resume from '../components/Resume'
import defaultValues from './defaultValues.js';

function App() {

  const [generalInformation,setGeneralInformation] = useState(defaultValues.generalInformation);
  const [educationalInformation,setEducationalInformation] = useState(defaultValues.resumeInformation.educationalInformation);
  const [workExperience,setWorkExperience] = useState(defaultValues.resumeInformation.workExperience);
  return (
    <div className="app-container">
      <div className='sidebar'>
        <GeneralInformation 
          setGeneralInformation={setGeneralInformation}
          generalInformation={generalInformation} 
        />
        <EducationalInformation
          setEducationalInformation={setEducationalInformation}
          educationalInformation={educationalInformation}
        />
        <WorkExperience
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      </div>
        <Resume className="resume-section"
          generalInformation={generalInformation}
          educationalInformation={educationalInformation}
          workExperience={workExperience}
        />
    </div>
  )
}

export default App
