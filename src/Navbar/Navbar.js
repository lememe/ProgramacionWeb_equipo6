import React, { useState } from 'react'
import '../App.css';
import "./Navbar.css";

const Navbar = ({ setToken }) => {
    const [isOpen, setIsOpen] = useState(false)
    const logOutHandler = () => {
      setToken("");
      localStorage.clear();
    };
    return (
      <div className='Navbar'>
        <h1>Tienda Falsa</h1>
        <div className={`nav_items ${isOpen && "open"}`}>
                <a href=""> INICIO</a>
                
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <button className='log-out-btn' onClick={() => logOutHandler()}>Salir</button>
      </div>
    )
  }

  export default Navbar