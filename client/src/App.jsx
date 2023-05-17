import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import PrivateRoute from './utils/PrivateRoute';
import {
  Error,
  ForgotPasswordForm,
  Home,
  Login,
  Signup,
  Tasks,
  User,
  VerifyCode
} from './pages/index'

const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<User />} />
            <Route path="/tasks" element={<Tasks />} />
          </Route>
          <Route path="/reset-password" element={<ForgotPasswordForm />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  )
}

export default App