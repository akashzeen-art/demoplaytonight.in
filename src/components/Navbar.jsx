import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar({ showPage }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <img
        src="/logo/zeen_medeconect logo.png"
        alt="Zeen Mediconnect Logo"
        className="navbar-logo"
        onClick={() => showPage('home')}
      />
      <div className="navbar-links">
        <a href="#" onClick={(e) => { e.preventDefault(); showPage('home') }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); showPage('about') }}>About Us</a>
        <a href="#" onClick={(e) => { e.preventDefault(); showPage('contact') }}>Contact Us</a>
      </div>
    </nav>
  )
}
