import { useState } from 'react'
import './App.css'
import GeneralInformation from '../components/GeneralInformation'
import EducationalInformation from '../components/EducationalInformation'
import WorkExperience from '../components/WorkExperience'
import Resume from '../components/Resume'
import defaultValues from './defaultValues.js';

function App() {

  const [generalInformation,setGeneralInformation] = useState(defaultValues.generalInformation);
  return (
    <div className="app-container">
      <div>
        <GeneralInformation 
          setGeneralInformation={setGeneralInformation}
          generalInformation={generalInformation} 
        />
        <EducationalInformation/>
        <WorkExperience/>
      </div>
      <Resume 
        generalInformation={generalInformation}
      />
    </div>
  )
}

export default App
