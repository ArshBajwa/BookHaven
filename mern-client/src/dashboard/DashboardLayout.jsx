
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBars from './SideBars'


const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
     <SideBars/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
