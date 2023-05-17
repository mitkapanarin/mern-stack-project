import React, { useState } from 'react'
import AddTask from "../components/AddTask"
import Card from '../components/Card'
import { useGetAllTasksQuery } from '../store/API/tasksApi'
import { useSelector } from 'react-redux'

const Tasks = () => {
  const userOwner = useSelector(x => x.User.userID)
  console.log(userOwner)
  const [data, setData] = useState({
    task: "",
    description: "",
    deadline: "",
    status: "",
    userOwner
  })

  const { data: allTasksData } = useGetAllTasksQuery({
    userID: userOwner
  })

  console.log(allTasksData)

  return (
    <div className='grid grid-cols-4 gap-4'>
      <AddTask />

      {allTasksData?.Tasks?.map(item => <Card key={item?._id} {...item} />)}

    </div>
  )
}

export default Tasks