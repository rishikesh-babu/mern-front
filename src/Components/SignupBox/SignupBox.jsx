// import React, { useEffect, useState } from 'react'
// import '../LoginBox/LoginBox.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AxiosInstance } from '../../config/axiosConfig';

// function SignupBox() {
// 	const [signupData, setSignupData] = useState({});
// 	//   const dispatch = useDispatch();
// 	  const navigate = useNavigate(); 

// 	// useEffect(() => {
// 	// 	console.log(signupData)
// 	// }, [signupData])

// 	const handleSignUp = (event) => {
// 		// After validation

// 		AxiosInstance.post('/users/signup', signupData)
// 		// axios.post('http://localhost:8080/users/signup', signupData, { headers: { 'Authorization': 'sjfsaj' } })
// 		.then((res) => {
// 				navigate('/login')
// 			})
// 			.catch((err) => {
// 				console.log("Error", err);
// 			})
// 	};
// 	const handleChange = (e) => {
// 		setSignupData({
// 			...signupData,
// 			[e.target.name]: e.target.value
// 		})
// 	}
// 	return (
// 		<div className="login-container">
// 			<h2>Login</h2>
// 			<div className="form-group">
// 				<label htmlFor="fullname">Username</label>
// 				<input
// 					type="text"
// 					id="fullname"
// 					name="fullname"
// 					className="form-control"
// 					value={signupData.fullname}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="password">mob</label>
// 				<input
// 					type="number"
// 					name='mob'
// 					className="form-control"
// 					value={signupData.mob}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="password">email</label>
// 				<input
// 					type="email"
// 					name='email'
// 					className="form-control"
// 					value={signupData.email}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="password">Password</label>
// 				<input
// 					type="text"
// 					name="password"
// 					className="form-control"
// 					value={signupData.password}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="password"> Confirm Password</label>
// 				<input
// 					type="password"
// 					name="cnfPassword"
// 					className="form-control"
// 					value={signupData.cnfPassword}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<button type="submit" className="btn-primary" onClick={handleSignUp} >
// 				Login
// 			</button>
// 		</div>
// 	);
// }
// export default SignupBox

//------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react'
import '../LoginBox/LoginBox.css'
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function SignupBox() {

	const [signupData, setSignupData] = useState({})
	const navigate = useNavigate()

	function handleChange(event) {
		setSignupData({ ...signupData, [event.target.name]: event.target.value })
		console.log(signupData)
	}

	function handleSignUp() {

		// console.log(signupData.password)
		if (signupData.password === signupData.conpassword) {
			// axios({
			// 	url: 'http://localhost:8080/users/signup',
			// 	method: 'post',
			// 	data: signupData
			// })
			// AxiosInstance.post('/users/signup', signupData)
			AxiosInstance({
				url: '/users/signup',
				method: 'post',
				data: signupData
			})
				.then((res) => {
					console.log(res)
					navigate('/login')
				})
				.catch((err) => {
					console.log({ err })
					alert(err.message)
				})
		} else {
			alert('Enter correct passoword')
		}
	}
	return (
		<div className='login-container'>
			<h2> Signup </h2>
			<div className="form-group">
				<label htmlFor="username"> Username </label>
				<input
					type="text"
					id='fullname'
					name='fullname'
					className='form-control'
					value={signupData.fullname}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="mob"> Mob </label>
				<input
					type="number"
					id='mob'
					name='mob'
					className='form-control'
					value={signupData.mob}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="email"> Email </label>
				<input
					type="email"
					id='email'
					name='email'
					className='form-control'
					value={signupData.email}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="password"> Password </label>
				<input
					type="text"
					id='password'
					name='password'
					className='form-control'
					// value={signupData.password}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="confirmpassword"> Confirm Password </label>
				<input
					type='password'
					id='conpassword'
					name='conpassword'
					className='form-control'
					value={signupData.conpassword}
					onChange={handleChange}
					required
				/>
			</div>
			<button
				type='submit'
				className="btn-primary"
				onClick={handleSignUp}
			>
				Signup
			</button>
		</div>
	);
}
export default SignupBox