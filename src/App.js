import React, { useState } from 'react';
import './App.css';
import Cards from './component/Cards/Cards';
import Profile from './component/Profile/Profile';
import Quistions from './component/Quistions/Quistions';

const App = () => {
	const [exerciseTime, setExerciseTimes] = useState([]);

	const setExerciseTime = (time) => {
		let newExerciseTime = [...exerciseTime, time];
		setExerciseTimes(newExerciseTime);
		console.log(newExerciseTime);
	};
	return (
		<div className=''>
			<div className='App flex'>
				<div className='cards-section'>
					<h2>WEB-EYE-ACTIVE-CLUB</h2>
					<h4>Select today's exercise</h4>
					<div className=''>
						<Cards setExerciseTime={setExerciseTime} />
					</div>
				</div>
				<Profile exerciseTime={exerciseTime} />
			</div>
			<Quistions />
		</div>
	);
};

export default App;
