
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'

export default function Layout() {


  return (

      <div className=' min-h-screen flex '>
        <div>
        <SideBar />
        </div>
        <div className='p-6 w-full'>
        <Outlet />
        </div>
      </div>


  )
}

