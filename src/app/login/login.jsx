"use client"

import UserContext from '@/context/userContext';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React,{useContext, useState} from 'react'
import { toast } from 'react-toastify';

function Login() {

    const router = useRouter();
    const context = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const loginFormSubmit = async (event) => {
        event.preventDefault();
        console.log(loginData);
        //invalid data

        if(loginData.email.trim() === '' || loginData.password.trim() === ""){
            toast.info("Invalid Data",{
                position:"top-center",
            })
        }

        //valid
        try {
            
            const result = await login(loginData)
            console.log(result)
            toast.success("Logged In",{
                position:"top-center",
            });
            context.setUser(result.user);
            //redirect
            router.refresh('/profile/user')
        } catch (error) {

            console.log(error)
            toast.error(error.response.data.message,{
                position:"top-center",
            })
        }
    }

  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5'>
            <div className="py-5">
                <h1 className='text-3xl flex justify-center mt-5'>Login Here</h1>
                <form action="#" onSubmit={loginFormSubmit}>

                {/* Email */}
                    <div className="mt-3">
                            <label htmlFor="user_email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Email
                            </label>
                            <input 
                                type="email" 
                                placeholder='' 
                                className=' ps-3 bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white'
                                id='user_email'
                                name="user_email"
                                onChange={(event) => {
                                    setLoginData({...loginData, email: event.target.value});
                                }}
                                value={loginData.email}
                                />
                    </div>

                    {/* Password */}
                    <div className="mt-3">
                        <label htmlFor="user_password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Password
                        </label>
                        <div className="flex">
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder='' 
                            className=' ps-3 bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white'
                            id='user_password'
                            name="user_password"
                            onChange={(event) => {
                                setLoginData({...loginData, password: event.target.value});
                            }}
                            value={loginData.password}
                            />

                            <button 
                                type='button' 
                                onClick={togglePasswordVisibility} 
                                className='ml-2 px-4 py-2 text-sm text-gray-200 bg-gray-600 rounded-full focus:outline-none'>
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/* Button */}

                    <div className='mt-4 flex justify-center '>
                        <button type='submit' className='bg-green-500 py-2 px-3 rounded-lg hover:bg-green-800 text-white'> Login </button>
                        <button  className='bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-800 ms-3'> Reset </button>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}

export default Login
