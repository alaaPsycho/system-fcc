import React from 'react'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar'
import './Home.css'
function home() {
  return (
    <div className='home'>
      <NavBar />

        <Cards/>
 
    </div>
  )
}

export default home