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
  return (
    <div className="app-container">
      <div>
        <GeneralInformation 
          setGeneralInformation={setGeneralInformation}
          generalInformation={generalInformation} 
        />
        <EducationalInformation
          setEducationalInformation={setEducationalInformation}
          educationalInformation={educationalInformation}
        />
        <WorkExperience/>
      </div>
      <Resume 
        generalInformation={generalInformation}
        educationalInformation={educationalInformation}
      />
    </div>
  )
}

export default App
