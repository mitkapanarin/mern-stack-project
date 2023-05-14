import React from 'react'
import { Outlet, Navigate } from 'react-router-dom' //Outlet will help me to acomplish my private rute

const PrivateRoute = () => {
  const isLogedIn = false
  return isLogedIn ? <Outlet/> : <Navigate to={"/login"}/>
}

export default PrivateRoute