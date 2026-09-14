import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const services = [
  { label: "01 Web Development", href: "/services/web-development" },
  { label: "02 Graphic Design", href: "/services/graphic-design" },
  { label: "03 Photography", href: "/services/photography" },
];

function ServicesSubmenu() {
  return (
    <ul className="submenu">
      {services.map((service) => (
        <li key={service.href}>
          <Link className="nav-link" to={service.href}>
            {service.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/" onClick={onNavigate}>
          Home
        </Link>
      </li>
      <li className="has-submenu">
        <button type="button" className="nav-link" aria-haspopup="true">
          Services
        </button>
        <ServicesSubmenu />
      </li>
      <li>
        <Link className="nav-link" to="/about" onClick={onNavigate}>
          About
        </Link>
      </li>
    </ul>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/assets/images/max-logo.svg" alt="Max" />
      </Link>

      <nav className="nav-desktop">
        <NavLinks />
      </nav>

      <button
        type="button"
        className="burger-btn"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <img src="/assets/images/burger-menu.svg" alt="" />
      </button>

      <div className={`mobile-panel${menuOpen ? " is-open" : ""}`}>
        <NavLinks onNavigate={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
