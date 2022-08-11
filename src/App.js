import React, { useState } from 'react'
import { Picker } from './Picker'
import './App.css'

function App() {
	const [name, setName ] = useState('')
  const [allReadyChoosen, setallReadyChoosen] = useState([])

  const studentNamesArray = process.env.REACT_APP_STUDENT_NAMES.split(',')
  const displayToggle = allReadyChoosen.length <= studentNamesArray.length

	const pickStudent = () => {
    
    const pickedStudent = studentNamesArray[Math.floor(Math.random() * studentNamesArray.length)]

    if (allReadyChoosen.includes(pickedStudent)) {
      return pickStudent()
    } else {
      setallReadyChoosen([...allReadyChoosen, pickedStudent])
      return setName(pickedStudent)
    }

  }

	return (
		<Picker
			name={name}
			pickStudent={pickStudent}
			displayToggle={displayToggle}
		/>
	)
}

export default App
