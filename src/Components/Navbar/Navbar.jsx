import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCalendarDay, faCalendarDays } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className="logo">ZiadBooking</span>
        <div className="navItem">
        <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar