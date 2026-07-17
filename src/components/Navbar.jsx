import React, { useState } from 'react'
import { Link } from 'react-router'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">💰</span>
          FinanceTracker
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-transaction" className="nav-link nav-link-cta" onClick={() => setIsOpen(false)}>
              Add Transaction
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
