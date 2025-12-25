import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">☕ SkyCafe</Link>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/cafes">Kafeler</Link></li>
            <li><Link to="/menu">Menü</Link></li>
            <li><Link to="/orders">Siparişler</Link></li>
            <li><Link to="/admin">Yönetim Paneli</Link></li>
            <li><Link to="/login">Giriş</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
