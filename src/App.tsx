import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ApplicationDetails from './pages/ApplicationDetails'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <div className="flex">
            <Sidebar />
            <Dashboard />
          </div>
        }
      />
      <Route
        path="/candidatura/:id"
        element={
          <div className="flex">
            <Sidebar />
            <ApplicationDetails />
          </div>
        }
      />
    </Routes>
  )
}

export default App
