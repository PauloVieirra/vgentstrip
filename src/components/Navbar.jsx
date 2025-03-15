import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { ButtonMenus } from './Btns';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    toggleMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>TRAVEL</span>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>

        <ButtonMenus variant="btnsMenu"><a href="#home" onClick={handleHomeClick}>Inicio</a></ButtonMenus>
        <ButtonMenus variant="btnsMenu"><a href="#tours" onClick={toggleMenu}>Sobre</a></ButtonMenus>
        <ButtonMenus variant="btnsMenu"> <a href="#gallery" onClick={toggleMenu}>Clientes</a></ButtonMenus>
        <ButtonMenus variant="btnsMenu"><a href="#reviews" onClick={toggleMenu}>SAC</a></ButtonMenus>
        <ButtonMenus variant="btnsMenu"><a href="#contacts" onClick={toggleMenu}>Login</a></ButtonMenus>

      </div>
      <div className="navbar-search">
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
