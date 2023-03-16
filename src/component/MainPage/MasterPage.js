import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
const masterPage = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div>
        {children}
        <Outlet />
      </div>
    </div>
  )
}

export default masterPage
