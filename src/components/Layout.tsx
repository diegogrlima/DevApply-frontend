import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useSidebar } from '../contexts/SidebarContext'

export default function Layout() {
  const { toggle } = useSidebar()

  return (
    <div className="flex">
      <button
        onClick={toggle}
        className="fixed top-4 left-4 z-[60] md:hidden p-2 bg-[#1a1a1a] border border-[#222] rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#888" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <Sidebar />
      <Outlet />
    </div>
  )
}
