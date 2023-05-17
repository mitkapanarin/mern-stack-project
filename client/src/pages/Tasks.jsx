import React, {useState} from 'react'
import AddTask from "../components/AddTask"
import Card from '../components/Card'
import { useGetAllTasksQuery } from '../store/API/tasksApi'
import { useSelector } from 'react-redux'

const Tasks = () => {
  const userOwner = useSelector(x=>x.User.userID)
  console.log(userOwner)
  const [data, setData] = useState({
    task: "",
    description: "",
    deadline: "",
    status: "",
    userOwner
  })

  return (
    <div className='grid grid-cols-4 gap-4'>
      <AddTask />
      <Card/>
    </div>
  )
}

export default Tasks