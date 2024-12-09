import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoggedInPage from './pages/LoggedInPage'
import TodoPage from './pages/TodoPage'

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/loggedin" element={<LoggedInPage/>}/>
    <Route path="/todo" element={<TodoPage/>}/>
    </Routes>
    </>
  )
}

export default App
