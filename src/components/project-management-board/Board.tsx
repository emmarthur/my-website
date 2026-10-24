'use client'

import { useEffect, useState } from 'react'
import useDataFetching from './useDataFetching'
import { Lane } from './Lane'
import {
  TASKS_DATA_SOURCE,
  type BoardTask,
} from '@/lib/project-management-board/tasksApi'
import './Board.css'

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
]

function onDragStart(e: React.DragEvent, id: number) {
  e.dataTransfer.setData('id', id.toString())
}

function onDragOver(e: React.DragEvent) {
  e.preventDefault()
}

export function Board() {
  const [loading, error, data] = useDataFetching<BoardTask>(TASKS_DATA_SOURCE)
  const [tasks, setTasks] = useState<BoardTask[]>([])

  useEffect(() => {
    setTasks(data)
  }, [data])

  function onDrop(e: React.DragEvent, laneId: number) {
    const id = e.dataTransfer.getData('id')

    const updatedTasks = tasks.filter((task) => {
      if (task.id.toString() === id) {
        task.lane = laneId
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <div className="Pmb-Board-wrapper">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane === lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  )
}
