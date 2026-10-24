/** Book URL: https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks */
export const TASKS_DATA_SOURCE = '/demos/project-management-board/tasks.json'

export type BoardTask = {
  id: number
  title: string
  body: string
  lane: number
}
