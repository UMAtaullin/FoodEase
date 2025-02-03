import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tasks/')
        setTasks(response.data)
      } catch (err) {
        setError('Ошибка при загрузке задач')
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.completed ? 'Завершена' : 'Не завершена'}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
