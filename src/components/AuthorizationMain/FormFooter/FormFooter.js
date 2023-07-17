import React from 'react';
import yandex from './yandex.svg';
import facebook from './facebook.svg';
import google from './google.svg';
import './FormFooter.css';
const FormFooter = () => {
  return (
    <div className='formFooterContainer'>
      <section className='formFooterSection'>Войти через:</section>
      <div className='formFooterBox'>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='n'>
            <img src={google} alt='GoogleLink' />
          </a>
        </div>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='n'>
            <img src={facebook} alt='Facebook' />
          </a> 
        </div>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='n'>
            <img src={yandex} alt='Yandex' />
          </a> 
        </div>
      </div> 
    </div>
  )
}

export default FormFooter