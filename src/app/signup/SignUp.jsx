"use client"

import React,{ useState } from 'react'
import SignUpSvg from "../../assets/signup.svg"
import Image from 'next/image'
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [data, setData] = useState({
        name:'',
        email: '',
        password: '',
        about:'',
        profileURL:'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
    })

    const doSignUp = async (event) => {
        event.preventDefault()
        console.log(data)

        if(data.name.trim() === '' || data.name == null ){
            toast.warning("Name is required",{
                position: "top-right",
            })
        }
        if(data.email.trim() === '' || data.email == null ){
            toast.warning("email is required",{
                position: "top-right",
            })
        }

        //TODO: rest of the field
        
        try {

            const result = await signUp(data)
            console.log(result)

            toast.success("User is created",{
                position: "top-right",
            })

            setData({
                name: '',
                email: '',
                password: '',
                about: '',
                profileURL:'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
            });

        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            toast.error(error.response.data.message,{
                position: "top-right",
            })
        }
    }

    const resetForm = () => {
        setData({
            name: '',
                email: '',
                password: '',
                about: '',
                profileURL:'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
        })
    }

  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5 '>
            <div className='p-5'>
                
            <div className='flex justify-center'>
                <Image src={SignUpSvg} style={{width:"30%"}} alt='SignUpBanner'/>
            </div>
                
                <h1 className='text-3xl flex justify-center mt-5'>SignUp Here</h1>
                <form action="#" className='mt-5' onSubmit={doSignUp}>
                    {/* Name */}
                    <div className="mt-3">
                        <label htmlFor="user_name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
                        <input 
                            type="text" 
                            placeholder='' 
                            className=' ps-3 bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white'
                            id="user_name"
                            name="user_name"
                            onChange={(event) => {
                                setData({...data, name: event.target.value});
                            }}
                            value={data.name}
                            />
                    </div>

                    {/** Email */}

                    <div className="mt-3">
                        <label htmlFor="user_email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder='' 
                            className=' ps-3 bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white'
                            id='user_email'
                            name="user_email"
                            onChange={(event) => {
                                setData({...data, email: event.target.value});
                            }}
                            value={data.email}
                            />
                    </div>

                    {/** Password */}
                    <div className="mt-3">
                        <label htmlFor="user_password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Password
                        </label>
                        <div className="flex">
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder='' 
                            className=' ps-3 bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white'
                            id='user_password'
                            name="user_password"
                            onChange={(event) => {
                                setData({...data, password: event.target.value});
                            }}
                            value={data.password}
                            />

                            <button 
                                type='button' 
                                onClick={togglePasswordVisibility} 
                                className='ml-2 px-4 py-2 text-sm text-gray-200 bg-gray-600 rounded-full focus:outline-none'>
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/** About */}
                    <div className="mt-3">
                        <label htmlFor="user_about" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            About
                        </label>
                        <textarea 
                            type="text" 
                            placeholder='' 
                            className=' ps-3 bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white'
                            id='user_about'
                            rows={4}
                            name="user_about"
                            onChange={(event) => {
                                setData({...data, about: event.target.value});
                            }}
                            value={data.about}
                            />
                    </div>

                    {/* Profile URL */}
                    

                    {/* Button actions */ }
                <div className='mt-4 flex justify-center '>
                    <button type='submit' className='bg-green-800 py-2 px-3 rounded-lg hover:bg-green-400'> Signup </button>
                    <button onClick={resetForm} className='bg-red-800 py-2 px-3 rounded-lg hover:bg-red-400 ms-3'> Reset </button>
                </div>

                </form>
            </div>
        </div>
    </div>
  )
}
