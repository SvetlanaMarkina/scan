import React from 'react';
import { useNavigate } from "react-router-dom";
import './NotAuthorization.css';
import slash from './slash.svg';

function LoginBtn() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <button className='accountBtn__login' type="button" onClick={handleClick}>
      Войти
    </button>
  );
}

const NotAuthorization = () => {
  return (
    <div className='accountBtn'>
        <a className='accountBtn__link' href='n'>Зарегистрироваться</a>
        <img className='slash' src={slash} alt='slash' />
        <LoginBtn />
    </div> 
  )
}

export default NotAuthorization;