import React, { useEffect } from 'react'
import './Notfound.css'
import { useNavigate } from 'react-router-dom';

function Notfound() {
    const navigate = useNavigate()

    function backto() {
        navigate(-1)
    }

    return (
        <div className='notfound d-flex justify-content-center align-items-center'>
            <div> 404 ERROR PAGE NOT FOUND </div>
            <button onClick={backto}> Go back </button>
        </div>
    )
}

export default Notfound
