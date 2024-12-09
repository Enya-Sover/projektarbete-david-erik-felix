import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LogIn from './components/LogIn'

function App() {


  return (
    <>
    <Home/>
    <LogIn/>

    <Routes>
    <Route to="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
