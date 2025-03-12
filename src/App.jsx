import { Outlet } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  )
}

export default App
