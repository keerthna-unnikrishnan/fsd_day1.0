import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/signup'
import Navbar from './components/Navbar'
import Gridchik from './components/Gridchik'
import Product from './components/Product'
import { Route, Router, Routes } from 'react-router-dom'
import Bground from './components/Bground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Signup/>
     <Gridchik/>  
     <Product/> */}
     <Navbar/>
      <Routes>
      <Route path='/gro' element={<Gridchik/>}/>
      <Route path='/sro' element={<Signup/>}/>
      <Route path='/pro' element={<Product/>}/>
      </Routes>
      <Bground/>
     
     
    </>
  )
}

export default App
