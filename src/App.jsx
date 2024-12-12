import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoggedInPage from './pages/LoggedInPage'
import TodoPage from './pages/TodoPage'

//Habit

import HabitsPage from './pages/HabitsPage'
import AddNewHabits from './components/AddNewHabits'
import HabitsList from './components/HabitsList'
import EditHabit from './components/EditHabit'

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/loggedin" element={<LoggedInPage/>}/>
    <Route path="/todo" element={<TodoPage/>}/>

    {/* habits */}
    <Route path="/edithabit" element={<EditHabit/>}/>
    <Route path="/habitlist" element={<HabitsList/>}/>
    <Route path="/habits" element={<HabitsPage/>} />
    <Route path="/addhabits" element={<AddNewHabits/>}/>
    </Routes>
    </>
  )
}

export default App
