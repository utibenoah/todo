
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './Home'
import cart from './store/cart'
import GetItem from './store/GetItem'


function App() {
  let [list,setList]=useState([
    {id:1, name:'Telvision', desc:'lorem', time:'8 am'},

    {id:2, name:'Telvision', desc:'lorem', time:'9 am'},
    {id:3, name:'Telvision', desc:'lorem', time:'9 am'},
    {id:4, name:'Telvision', desc:'lorem', time:'9 am'},
    {id:5, name:'Telvision', desc:'lorem', time:'9 am'}
  ])

  let data=GetItem()

  const setApp=()=>{
        let items = GetItem()
        if (items) {
          cart(items)
        }
  }
useEffect(()=>{
  setApp()
})
  return (
    <div>

      <Header/>
    <Home list={data}/>
      <Footer/>
    </div>
  )
}

export default App
