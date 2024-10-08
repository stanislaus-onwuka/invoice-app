import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardMenu from '../DashboardMenu'

function DashboardLayout() {
  return (
    <div className="flex bg-main-content-bg">
      <DashboardMenu/>
      <main className="ml-[280px] w-full px-10">
				<Outlet />
			</main>
    </div>
  )
}

export default DashboardLayout