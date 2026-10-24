'use client'

import styled from 'styled-components'
import { Board } from './Board'
import { BoardHeader } from './BoardHeader'
import { Backlog } from './Backlog'

const DemoShell = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
`

export function ProjectManagementBoardApp() {
  return (
    <DemoShell>
      <BoardHeader />
      <Board />
      <Backlog />
    </DemoShell>
  )
}
