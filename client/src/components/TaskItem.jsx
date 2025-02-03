import React from 'react'

const TaskItem = ({ task }) => {
  return (
    <li>
      {task.title} - {task.completed ? 'Завершена' : 'Не завершена'}
    </li>
  )
}

export default TaskItem
