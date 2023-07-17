import React from 'react';
import './CommonAccessMain.css';
import Description from './Description';
import MainCarousel from './MainCarousel';
import Tariffs from './Tariffs';
import man from './man.svg';

const CommonAccessMain = () => {
  return (
    <main className='main'>
      <div className='main__wrap_common'>
        <Description />
        <MainCarousel />
        <img className='man' src={man} alt='man' />
        <Tariffs />
      </div> 
    </main>
  )
}

export default CommonAccessMain