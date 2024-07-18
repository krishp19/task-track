import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx";

const Work = ({work, deleteTaskParent}) => {
    const {user} = useContext(UserContext)

    function deleteTask(workId) {
        deleteTaskParent(workId)
    }
  return (
    <div className={`shadow shadow-gray-100 mt-2 ${work.status == "completed" ? "bg-green-800 " : "bg-gray-800"}`}>
        <div className='p-5'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>{work.title}</h1>
                <div className='flex'>
                <span onClick={()=>{
                    deleteTask(work._id)
                }} className='mr-2 shadow-lg bg-gray-950 hover:bg-gray-900 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer'>
                    <RxCross1/>
                </span>
                </div>
            </div>
            <p className='font-normal'>{work.description}</p>
            <div className="flex justify-between mt-3">
                <p className='text-left'>
                    Status: <span className='font-bold'>{work.status}</span>
                </p>
                <p className='text-right'>
                    Added by: <span className='font-bold'>{user?.name}</span>
                </p>
            </div>

        </div>
    </div>
  )
}

export default Work
