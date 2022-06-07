import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

  const links = [
    { id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/calculator",
      text: "Calculator",
    },
    {
      id: 3,
      path: "/quote",
      text: "Quote",
    }
  ];

  const [ menuOpen, setMenuOpen ] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='nav'>
      <h1>Math Magicians</h1>
      <i onClick={handleMenu}>
        {menuOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#000", width: "40px", height: "40px" }} />
        )}
      </i>
      <ul  className={`menuNav ${menuOpen? "showMenu" : ""}`}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <NavLink 
              to={link.path}
              onClick={() => closeMenu()}
              >{link.text} 
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
