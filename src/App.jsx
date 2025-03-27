import "./App.css"
import React from 'react'
import Navbar from './Components/Layout/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Layout/Home'
import Login from "./Components/Layout/Login"
import Todo from './Components/Layout/Todo'
function App() {
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element= {<Home></Home>}></Route>
            <Route path='/LogIn' element= {<Login className="flex justify-center items-center"></Login>} ></Route>
            <Route path='/Todo' element = {<Todo></Todo>}></Route>
        </Routes>

    </div>
  )
}

export default App
