import React, { useState } from 'react'
import './home.css'
import Sidebar from '../sidebar'
import Home2 from './home2'
const Home = () => {
  const [toggle,setToggle] = useState(false)

  const toggleSide = () => {
    setToggle(!toggle)
  }
  return (
    <div className={ toggle? "homeMain2": "homeMain"}>
        <div className="sideBar" >
        <Sidebar toggle={toggle}/>
      {
        !toggle?
      <div className='icon' onClick={toggleSide}>
      <svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z" clip-rule="evenodd"></path>
</svg>
      </div>:
        <div className='icon' onClick={toggleSide}>
        <svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.92 17.28a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Z" clip-rule="evenodd"></path>
</svg>
      </div>
      }
        </div>
        <Home2/>
    </div>
  )
}

export default Home