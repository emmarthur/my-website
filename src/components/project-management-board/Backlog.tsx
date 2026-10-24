'use client'

import { Task } from './Task'
import useDataFetching from './useDataFetching'
import {
  TASKS_DATA_SOURCE,
  type BoardTask,
} from '@/lib/project-management-board/tasksApi'
import './Backlog.css'

export function Backlog() {
  const [loading, error, tasks] = useDataFetching<BoardTask>(TASKS_DATA_SOURCE)

  return (
    <div className="Pmb-Backlog-wrapper">
      <h2>Backlog</h2>
      <div className="Pmb-Tasks-wrapper">
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} title={task.title} body={task.body} />
          ))
        )}
      </div>
    </div>
  )
}
