import React, { useState } from 'react'
import { useLoginUserMutation } from '../store/API/userApi'
import InputField from '../components/InputField'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from "../store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch() // initialization
    const store = useSelector((z) => z)
    console.log(store)
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [loginUser] = useLoginUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const x = await loginUser(data)
            dispatch(login(x?.data))
            toast.success("Logged in successfully")
            navigate("/")

        }
        catch (err) {
            console.log("error occured")
            toast.success("Couldn't login, please try again")
        }
    }

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <InputField label="Your email" name="email" onChange={handleInput} placeholder="enter your email" required={true} value={data.email} />
                                <InputField label="Your password" name="password" onChange={handleInput} placeholder="enter your password" required={true} value={data.password} />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login