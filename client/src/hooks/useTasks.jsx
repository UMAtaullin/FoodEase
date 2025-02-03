import { useEffect, useState } from 'react'
import { fetchTasks } from '../api/taskApi'

const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks()
        setTasks(data)
      } catch (err) {
        setError('Ошибка при загрузке задач')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  return { tasks, loading, error }
}

export default useTasks
