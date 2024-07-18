"use client";

import React, { useState } from 'react'
import addingSvg from "../../assets/adding.svg"
import Image from 'next/image'
import { addWork } from '@/services/taskServices';

import { toast, Toast } from 'react-toastify';

export const AddTask = () => {
    

    const [work, setWork] = useState({
        title:"",
        description:"",
        status:"none",
        userId:"6690e4f2e27d865e503de1f6",
    })

    const handleAddWork = async(event) => {
        event.preventDefault()
        console.log(work);
        toast.success("your task is added !!",{
            position: "top-center",
        })

        setWork({
            title:"",
            description:"",
            status:"none",    
        })
        try {

            const result = await addWork(work)
            console.log(result)
        } catch (error) {
            console.log(error)
            toast.error("task not added"),{
                position: "top-center",
            }
        }

    }
    
  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className=' shadow shadow-gray-500 p-5 col-span-4 col-start-5'>
            <div className='flex justify-center'>
                <Image src={addingSvg} width={100} height={100} alt='addingBannerImage'/>
            </div>
            
            <h1 className='text-3xl mt-5 flex justify-center'>Add your task here</h1>

            <form action="#" onSubmit={handleAddWork}>

                { /*Title*/ }
                <div className='mt-4'>
                    <label htmlFor="work_title" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Title</label>
                    <input 
                        type="text" 
                        className='bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white ' 
                        id='work_title'
                        name='work_title'
                        onChange={(event)=>{
                            setWork({...work, title: event.target.value,})
                        }}
                        value={work.title}
                        />
                    
                </div>

                { /*Description*/ }

                <div className='mt-4'>
                    <label htmlFor="work_content" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Content</label>
                    <textarea 
                        type="text" 
                        className='bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white ' 
                        id='work_content'
                        rows={5}
                        name='work_content'
                        onChange={(event)=>{
                            setWork({...work, description:event.target.value})
                        }}
                        value={work.description}
                        />
                    
                </div>

                { /*Status*/ }

                <div className='mt-4'>
                    <label htmlFor="work_status" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Status</label>
                    <select 
                    id="work_status" 
                    className='bg-gray-50 border-0 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-white dark:text-white  '
                    name='work_status'
                    onChange={(event)=>{
                        setWork({...work, status:event.target.value})
                    }}
                    value={work.status}
                    >
                        <option value="none" disabled>--- Select Status ---</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    
                </div>

                {/* Button actions */ }
                <div className='mt-4 flex justify-center '>
                    <button className='bg-teal-600 py-2 px-3 rounded-lg hover:bg-teal-900'> Add Task </button>
                    <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 ms-3'> Clear </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTask
