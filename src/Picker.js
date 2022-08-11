import React from 'react'
import './Picker.css'

export const Picker = ({ name, pickStudent, displayToggle }) => (
	<main className='main-card'>
		{displayToggle ? (
			<>
				<p key={name} className='roll-in-blurred-left name'>
					{name}
				</p>
				<button className='button-30' onClick={pickStudent}>
					Choose
				</button>
			</>
		) : (
			<p className='name'>No more students</p>
		)}
	</main>
)
