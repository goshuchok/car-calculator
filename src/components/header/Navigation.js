import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navlinks">
      <NavLink to="/" className="link">
        Купить
      </NavLink>
      <NavLink to="/sell" className="link">
        Продать
      </NavLink>
      <NavLink to="/autocredit" className="link">
        Автокредит
      </NavLink>
      <NavLink to="contact" className="link">
        Контакты
      </NavLink>
    </div>
  );
}

export default Navigation;
