import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import Logo from './Logo';
import NavBar from './NavBar';
import NotAuthorization from './NotAuthorization';
import Authorization from './Authorization';
import BurgerMenu from './BurgerMenu';

function Header() {
  const accountInfo = useSelector((state)=>state.profile.companyInfo);
  const AccountElement = accountInfo ? Authorization : NotAuthorization
  return (
    <header className='header'>
      <div className='header__wrap'>
        <Logo />
        <NavBar />
        <AccountElement />
        <BurgerMenu />
      </div>  
    </header>
  )
}

export default Header