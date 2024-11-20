// import React, { useState } from 'react'
// import './LoginBox.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AxiosInstance } from '../../config/axiosConfig';

// function LoginBox() {
//     const [loginData, setloginData] = useState({});
//     //   const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogin = (event) => {
//         AxiosInstance({
//             // url: "http://localhost:8080/users/login",
//             url: `/users/login`,
//             method: "post",
//             // baseURL: process.env.REACT_APP_API_BASE_URL,
//             data: loginData
//         })
//             .then((res) => {
//                 // debugger
//                 console.log(res.data.token)
//                 localStorage.setItem("token", res.data.token)
//                 // localStorage.setItem("Sample", "Sample Data")
//                 navigate('/')
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     };
//     const handleChange = (e) => {
//         setloginData({ ...loginData, [e.target.name]: e.target.value })
//     }
//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <div className="form-group">
//                 <label htmlFor="email">Username</label>
//                 <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     className="form-control"
//                     value={loginData.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="text"
//                     name="password"
//                     className="form-control"
//                     value={loginData.password}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit" className="btn-primary" onClick={handleLogin}>Login</button>
//         </div>
//     );
// }
// export default LoginBox

//          NEW ONE

import React, { useState } from 'react'
import './LoginBox.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function LoginBox() {

    const [loginData, setloginData] = useState({})
    const navigate = useNavigate()

    function handleLogin() {
        // debugger
        AxiosInstance({
            url: `/users/login`,
            method: 'post',
            data: loginData
        })
        .then((res) => {
            // console.log("Login Successful")
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            navigate('/') 
        })
        .catch((err) => {
            // alert(err?.response?.data)
            alert("Enter valid crediantils")
            console.log({err})
        })
    }
    
    function handleChange(event) {
        setloginData({...loginData, [event.target.name]: event.target.value})
        console.log(loginData)
    }   

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    className="form-control"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn-primary" onClick={handleLogin}>Login</button>
        </div>
    );
}
export default LoginBox