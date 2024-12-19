import { useState } from 'react';

const Nav = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div id="toggleMenu" onClick={toggleMenu}>
        <img
          src={menuOpen ? '/images/close.png' : '/images/menu.png'}
          alt="Menu Toggle"
        />
      </div>
      <nav className={menuOpen ? 'show' : ''}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              <a href={item.link}>
                <img src={item.icon} alt={item.label} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
