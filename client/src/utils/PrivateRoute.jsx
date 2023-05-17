import React from 'react'
import { Outlet, Navigate } from 'react-router-dom' //Outlet will help me to acomplish my private rute
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const store = useSelector(x => x)
  const isLogedIn = store.User.token
  return isLogedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute