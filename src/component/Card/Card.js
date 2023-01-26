import React, { useState } from 'react';
import './Card.css';

const Card = ({ shedule, getTime }) => {
	const { name, description, time, picture } = shedule ? shedule : {};
	const [texts, setTexts] = useState(['Activity Comoleted']);

	const changeText = () => {
		setTexts(['Added', 'green']);
	};

	return (
		<div className='card'>
			<div className='img-container'>
				<img src={picture} alt='' />
			</div>
			<p className='margin bold'>Name {name}</p>
			<p className='margin'>
				<span className='bold'>Description</span>{' '}
				{description?.slice(0, 100) + '...'}
			</p>
			<p className='margin bold'>For Age: 20 to 35 </p>
			<p className='margin bold'>Time required : {time}s </p>

			<button
				onClick={() => {
					getTime(time);
					changeText();
				}}
				className='margin '
				style={{ backgroundColor: texts[1] }}
			>
				{texts[0]}
			</button>
		</div>
	);
};

export default Card;
