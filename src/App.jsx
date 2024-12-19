import { Route, Routes } from 'react-router-dom'
import './todos.css'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoggedInPage from './pages/LoggedInPage'
import TodoPage from './pages/TodoPage'
import EditTodo from './pages/EditTodo'
import EventCalendar from './pages/EventCalendar'
import './styles.css'


//Habit

import HabitsPage from './pages/HabitsPage'
import AddNewHabits from './components/AddNewHabits'

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/loggedin" element={<LoggedInPage/>}/>
    <Route path="/todo" element={<TodoPage/>}/>
    <Route path="/todo/:id" element={<EditTodo/>}/>
    <Route path="/events" element={<EventCalendar/>} />
    <Route path="/habits" element={<HabitsPage/>} />
    <Route path="/addhabits" element={<AddNewHabits/>}/>
    </Routes>

    </>
  )}

export default App
