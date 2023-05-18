import React from 'react'
import { useGetAllTasksQuery } from '../store/API/tasksApi'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(z => z)
  console.log(state.User.username)
  const userOwner = useSelector(x => x.User.userID)
  console.log(userOwner)

  const { data } = useGetAllTasksQuery({ userID: userOwner });

  const completed = data?.Tasks?.filter(item => item.status == true)
  const incomplete = data?.Tasks?.filter(item => item.status == false)

  const completedTasks = completed?.map(task => (
    <tr key={task._id}>
      <td className="border px-4 py-2">{task.task}</td>
      <td className="border px-4 py-2">{task.deadline}</td>
      <td className="border px-4 py-2">{task.description}</td><br/>
    </tr>
  ))

  const incompleteTasks = incomplete?.map(task => (
    <tr key={task._id}>
      <td className="border px-4 py-2">{task.task}</td>
      <td className="border px-4 py-2">{task.deadline}</td>
      <td className="border px-4 py-2">{task.description}</td>
    </tr>
  ))

  return (
    <div>
      <h1 className='text-center text-4xl'>Welcome {state.User.username} 👋</h1><br /><br />
      <div className="mx-auto">
        <h2 className='text-center text-2xl'>Completed Tasks:</h2>
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks}
          </tbody>
        </table>
        <br />
      </div>
      <div className="mx-auto">
        <h2 className='text-center text-2xl'>Incomplete Tasks:</h2>
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {incompleteTasks}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home