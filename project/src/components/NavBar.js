import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/jobs'>Jobs</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/logout'>Log Out </Link></li>
        </ul>
      </nav>
    </div>
  )
}
