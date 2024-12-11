import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoggedInPage from './pages/LoggedInPage'
import TodoPage from './pages/TodoPage'
import EventCalendar from './pages/EventCalendar'


function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/loggedin" element={<LoggedInPage/>}/>
    <Route path="/todo" element={<TodoPage/>}/>
    <Route path="/events" element={<EventCalendar/>} />
    </Routes>

    </>
  )
}

export default App
