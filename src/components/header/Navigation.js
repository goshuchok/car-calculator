import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navlinks">
      <Link to="/" className="link">
        Купить
      </Link>
      <Link to="/sell" className="link">
        Продать
      </Link>
      <Link to="/autocredit" className="link">
        Автокредит
      </Link>
      <Link to="contact" className="link">
        Контакты
      </Link>
    </div>
  );
}

export default Navigation;
