import React from 'react'
import SignupBox from '../../Components/SignupBox/SignupBox'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const navigate = useNavigate()

    function gologin() {
        navigate('/login')
    }
    return (
        <div className='d-flex flex-column'>
            <SignupBox />
            <button
                onClick={gologin}
                className='button btn-primary'
            >
                Go Login
            </button>
        </div>
    )
}
export default Signup