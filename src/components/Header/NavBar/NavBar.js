import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='menu'>
        <Link className='menu__link menu__link_active' to='/'>Главная</Link>  
        <a className='menu__link' href='n'>Тарифы</a>  
        <a className='menu__link' href='n'>FAQ</a>  
    </nav>
  )
}

export default NavBar