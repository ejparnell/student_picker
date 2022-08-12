import React, { useState } from 'react'
import { Picker } from './Picker'
import './App.css'

function App() {
  // string of current pick
	const [name, setName ] = useState('')
  // array all that have been picked 
  const [allReadyChosen, setAllReadyChosen] = useState([])
  // array of names that can be picked
  const [studentNamesArray, setStudentNamesArray] = useState(process.env.REACT_APP_STUDENT_NAMES.split(','))
  // if false - render user message that all have been picked

  // total number of potential picks at start
  const classSize = process.env.REACT_APP_STUDENT_NAMES.split(',').length
  const displayToggle = allReadyChosen.length <= classSize

  // pic function
	const pickStudent = () => {
    

    const pickedIndex = Math.floor(Math.random() * studentNamesArray.length)

    const pickedStudent = studentNamesArray[pickedIndex]

    console.log(`pickedIndex: ${pickedIndex},\n which is pickedStudent ${pickedStudent},\n from student names array ${studentNamesArray}`)

    setAllReadyChosen([...allReadyChosen, pickedStudent])

    const studentNamesArrayCopy = studentNamesArray.slice()
    studentNamesArrayCopy.splice(pickedIndex, 1)
    console.log(`Students Name copy ${studentNamesArrayCopy}`)

    setStudentNamesArray(studentNamesArrayCopy)
      return setName(pickedStudent)
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
