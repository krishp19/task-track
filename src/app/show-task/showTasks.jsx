"use client"

import UserContext from '@/context/userContext'
import { deleteUser, getTaskOfUser } from '@/services/taskServices'
import React, { useContext, useEffect, useState } from 'react'
import Work from './task'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'


const ShowTasks = () => {
    const Swal = require('sweetalert2')

    const [works, setWorks] = useState([])
    const context = useContext(UserContext)
    async function loadTasks(userId) {
            try {
                const works = await  getTaskOfUser(userId)
                console.log("works: ",works)
                setWorks([...works].reverse())
                console.log(works)
            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        if(context.user){
            loadTasks(context.user._id);
        }
    },[context.user])

    async function deleteTaskParent(workId) {
        try {
            const result = await deleteUser(workId)
            console.log(result)
            const newTasks = works.filter(item => item._id!=workId)
            setWorks(newTasks)
            toast.success("Task Deleted")
        } catch (error) {
            console.log(error)
            toast.error("Error in deleting Task")
        }
    }

  return (
    <div className='grid grid-cols-12 mt-3'>
        <div className='col-span-6 col-start-4'>
            <h1 className='text-3xl text-center mb-5'>Your Tasks ({works.length})</h1>
            {
                works.map((work) => (
                    <Work 
                        work = {work} 
                        key={work._id}
                        deleteTaskParent={deleteTaskParent}
                        />
                ))
            }
        
        </div>
    </div>
  )
}

export default ShowTasks
