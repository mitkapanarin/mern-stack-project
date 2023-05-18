import React, { useState } from 'react'
import DeleteIcon from './DeleteIcon'
import EditIcon from './EditIcon'
import { useEditTaskMutation } from '../store/API/tasksApi'
import { useSelector } from 'react-redux'

const Card = (props) => {
  const { task, description, status, _id, deadline } = props
  const userOwner = useSelector(x=>x.User.userID)
  const [editTask] = useEditTaskMutation()

  const handleStatus = async () => {
    try {
      const updatedData = {
        status: !status,
      };
      const response = await editTask({
        userID: userOwner,
        taskID: _id,
        updatedData: updatedData,
      });
      console.log('Updated task:', response.data);
    } catch (err) {
      console.log('Cannot edit task', err);
    }
  };


  return (

    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{deadline}</p>
      <div className='flex items-center gap-2'>
        <button onClick={handleStatus} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {status ? "Undone" : "Done"}
        </button>
        <DeleteIcon _id={_id} />
        <EditIcon {...props} />
      </div>

    </div>

  )
}

export default Card