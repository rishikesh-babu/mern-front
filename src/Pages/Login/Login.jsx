import React from 'react'
import LoginBox from '../../Components/LoginBox/LoginBox'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate()

    function gosignup() {
        navigate('/signup')
    }
    return (
        <div className='d-flex flex-column'>
            <LoginBox />
            <button
                onClick={gosignup}
                className='button btn-primary'
            >
                Go Signup
            </button>
        </div>
    )
}
export default Login