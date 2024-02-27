import { useState } from 'react';
import './navbar.css'; // Import your CSS file for styling
import { BsList, BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
       <img src="/images/Logonegativo.png" style={{ height: '100px' }} alt=""  />
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Proyecto</Link>
          <Link to="/resultados">Resultados</Link>
          <a href="/">Mejora tu centro</a>
          <a href="/">Noticias</a>
          <a href="/">Contacto</a>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? <BsX /> : <BsList />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
