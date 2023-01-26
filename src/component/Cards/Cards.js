import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import './Cards.css';

const Cards = ({ setExerciseTime }) => {
	const [shedules, setShedule] = useState([]);
	// console.log(routine);

	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setShedule(data));
	}, []);

	const getTime = (time) => {
		setExerciseTime(time);
	};

	return (
		<div className='cards'>
			{shedules?.map((shedule) => (
				<Card key={shedule.id} shedule={shedule} getTime={getTime}></Card>
			))}
		</div>
	);
};

export default Cards;
