import React from 'react';
import './Quistins.css';

const Quistions = () => {
	return (
		<div>
			<div className='quistions'>
				<h2>Quistins Ans</h2>
				<hr />
				<div className='quistions-container'>
					<div className='quistion'>
						<h3> How does react work ?</h3>
						<p>
							Ans :ReactJS divides the UI into isolated reusable pieces of code
							known as components. React components work similarly to JavaScript
							functions as they accept arbitrary inputs called properties or
							props. It's possible to have as many components as necessary
							without cluttering your code{' '}
						</p>
					</div>
					<div className='quistion'>
						<h3> difference between props and state in react ?</h3>
						<p>
							Ans :Props are used to pass data from one component to another.
							The state is a local data storage that is local to the component
							only and cannot be passed to other components. The this. setState
							property is used to update the state values in the component{' '}
						</p>
					</div>
					<div className='quistion'>
						<h3> What are some of the features of the useEffect Hook?</h3>
						<p>
							Ans : useEffect Hook lets you run additional code after React has
							already updated the DOM. ... Use cases Add an event listener for a
							button. Data fetching from API when component mounts. Perform an
							action when state or props change. Clean up event listeners when
							the component unmounts. Jan 5, 2020{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quistions;
