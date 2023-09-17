
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './Home'
import {getTodoFromLocalStorage} from './app/Features/TodoList/todoListSlice'
import { useDispatch } from 'react-redux'




function App() {
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(getTodoFromLocalStorage())
  },[getTodoFromLocalStorage()])

  return (
    <div>

      <Header/>
    <Home />
      <Footer/>
    </div>
  )
}

export default App
