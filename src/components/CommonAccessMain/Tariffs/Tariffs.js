import React from 'react';
import TariffCards from './TariffCards';
import './Tariffs.css';

const Tariffs = () => {
  return (
    <div className='tariff'>
      <h1 className='tariff__title'>
        наши тарифы
      </h1>
      <TariffCards />
    </div>
  )
}

export default Tariffs