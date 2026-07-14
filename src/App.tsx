import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Candidaturas from './pages/Candidaturas'
import ApplicationDetails from './pages/ApplicationDetails'
import NewApplication from './pages/NewApplication'
import Perfil from './pages/Perfil'
import Emails from './pages/Emails'

import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/candidaturas" element={<Candidaturas />} />
        <Route path="/candidatura/:id" element={<ApplicationDetails />} />
        <Route path="/nova-candidatura" element={<NewApplication />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/emails" element={<Emails />} />
      </Route>
    </Routes>
  )
}
export default App
