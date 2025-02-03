import React from 'react'
import TaskItem from './TaskItem'
import useTasks from '../hooks/useTasks'

const TaskList = () => {
  const { tasks, loading, error } = useTasks()

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
