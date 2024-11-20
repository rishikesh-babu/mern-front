// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// export function Auth() {
//     const token = localStorage.getItem('token')
//     console.log(token)
//     return token ? <Outlet /> : <Navigate to={'/login'} />
// }

// export function AvoidLogin() {
//     const token = localStorage.getItem('token')
//     return token ? <Navigate to={'/'} /> : <Outlet />
// }

//-------------------------------------------------------------------------------------------------------------------

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function AvoidLogin() {
    const token = localStorage.getItem('token')
    return (token ? <Navigate to={'/'} /> : <Outlet />)
}

export function Auth() {
    console.log("This is Auth function ")
    const token = localStorage.getItem('token')
    console.log("Token: ", token)
    return (token ? <Outlet /> : <Navigate to={'/login'} />)
}