
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AuthGuard from './root/auth/_guard/AuthGuard'
import SideBar from '../components/SideBar'

export default function Layout() {


  return (
    <AuthGuard>
      <div className=' min-h-screen flex '>
        <div>
        <SideBar />
        </div>
        <div className='p-6 w-full'>
        <Outlet />
        </div>
      </div>
    </AuthGuard>

  )
}

