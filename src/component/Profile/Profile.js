import React, { useEffect, useState } from 'react';
import './Profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = ({ exerciseTime }) => {
	const [breaks, setBreack] = useState([10, 20, 30, 40, 50]);
	const [exerciseTimeSum, setExerciseTimeSum] = useState(0);
	const [second, setScond] = useState();

	const setBreackSecond = (second) => {
		localStorage.setItem('break', JSON.stringify(second));
		setScond(second);
	};

	useEffect(() => {
		const savedBreak = JSON.parse(localStorage.getItem('break'));
		setScond(savedBreak);
	}, []);

	useEffect(() => {
		let totalExerciseTime = exerciseTime.reduce((accum, curr) => {
			return accum + curr;
		}, 0);
		setExerciseTimeSum(totalExerciseTime);
		console.log(totalExerciseTime);
	}, [exerciseTime]);

	const notify = () =>
		toast.success('🦄 Activity completed!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	return (
		<div className='profile'>
			<div className='profile-img'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsS1Z0UXSKOc_Fjslp0R7k3CCKmtPcUPYCA&usqp=CAU'
					alt=''
				/>
				<span>Israfil</span>
			</div>
			<div className='details'>
				<div className=''>
					<p>
						75<span>kg</span>
					</p>
					<span>Weight</span>
				</div>
				<div className=''>
					<p>5.8</p>
					<span>Height</span>
				</div>
				<div className=''>
					<p>22</p>
					<span>age</span>
				</div>
			</div>

			<div className='break-container'>
				<h4>Add A Break</h4>
				<div className='breaks'>
					{breaks.map((brea) => (
						<div key={brea} onClick={() => setBreackSecond(brea)} className=''>
							<span>{brea}s</span>
						</div>
					))}
				</div>
			</div>

			<div className='exircise-details-container'>
				<h4>Exercise Details</h4>
				<p>
					Exercise time{' '}
					<span>
						{exerciseTimeSum} <span>seconde</span>
					</span>
				</p>
				<p>
					Break time{' '}
					<span>
						{second ? second : 0} <span>seconde</span>
					</span>
				</p>
			</div>

			<div className='completed-btn'>
				<button onClick={notify}>Activity Completed</button>
				<ToastContainer
					position='top-center'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</div>
	);
};

export default Profile;
