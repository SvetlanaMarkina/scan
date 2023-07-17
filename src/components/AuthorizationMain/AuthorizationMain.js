import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import './AuthorizationMain.css';
import peopleCarryKey from './peopleCarryKey.svg';
import padlock from './padlock.svg';

const AuthorizationMain = () => {
  const newWidth = useSelector(state => state.app.width)
  
  const isShown = newWidth < 1270 ? true : false;
  return (
    <main className='main'>
      <div className='main__wrap-auth'>
        <div className='main__leftBox'>
          <h1 className='main__title'>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
          <img className='main__image' src={peopleCarryKey} alt='peopleCarryKey' hidden={isShown}/>
        </div>
        <div className='main__rightBox'>
          <img className='main__padlockImg' src={padlock} alt='padlock' />
          <Form />
        </div>
        <img className='main__image' src={peopleCarryKey} alt='peopleCarryKey' hidden={!isShown}/>
      </div>
    </main>
  )
}

export default AuthorizationMain