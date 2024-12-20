import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import './todos.css'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoggedInPage from './pages/LoggedInPage'
import TodoPage from './pages/TodoPage'
import EditTodo from './pages/EditTodo'
import EventCalendar from './pages/EventCalendar'
import HabitsPage from './pages/HabitsPage'
import AddNewHabits from './components/AddNewHabits'
import './styles.css'
import { useContext } from 'react'
import { LoginContext } from './context/LoginContext'
import './habits.css'


function App() {
const navigate = useNavigate()
  const {setCurrentUser, currentUser} = useContext(LoginContext)
  const handleLogOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <>
    <header className="header">
        <img src="./src/assets/Logo.jpg" alt="logo" className="logo-container"/>
        {currentUser && <>
        <nav>
        <Link to="/loggedin">Start</Link>
        <Link to="/todo">Todos</Link>
        <Link to="/habits">Habits</Link>
        <Link to="/events">Events</Link>
      </nav>
      <div className="btn-container">
       <button onClick={handleLogOut}>Log out</button>
      </div></>}
      </header>
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
