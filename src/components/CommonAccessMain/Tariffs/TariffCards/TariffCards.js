import React from 'react';
import './TariffCards.css';
import lamp from './lamp.svg';
import target from './target.svg';
import laptop from './laptop.svg';

const TariffCards = () => {
  return (
    <div className='tariffCards'>
      <div className='tariffCards__card tariffCards__card_beginner'>
        <div className='card__box'>
          <div className='card__title'>
            <h1>Beginner</h1>
            <section>Для небольшого исследования</section>
          </div>
          <div className='lamp'>
            <img src={lamp} alt='lamp' />
          </div> 
        </div>        
        <div className='card__body card__body_beginner'>
            <span className='card__actual-tariff'>Текущий тариф</span>
            <h2 className='card__price'>799 ₽<span className='card__old-price'>1 200 ₽</span></h2>
            <section className='card__price-explanation'>или 150 ₽/мес. при рассрочке на 24 мес.</section>
            <h3 className='card__list'>В тариф входит:</h3>
            <ul>
              <li className='card__list-item'>Безлимитная история запросов</li>
              <li className='card__list-item'>Безопасная сделка</li>
              <li className='card__list-item'>Поддержка 24/7</li>
            </ul>
            <button className='card__btn'>Перейти в личный кабинет</button>
        </div>
      </div>
      <div className='tariffCards__card tariffCards__card_pro'>
      <div className='card__box'>
          <div className='card__title'>
            <h1>Pro</h1>
            <section>Для HR и фрилансеров</section>
          </div>
          <div className='target'>
            <img src={target} alt='target' />
          </div> 
        </div>        
        <div className='card__body card__body_pro'>
            <span className='card__actual-tariff' style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className='card__price'>1 299 ₽<span className='card__old-price'>2 600 ₽</span></h2>
            <section className='card__price-explanation'>или 279 ₽/мес. при рассрочке на 24 мес.</section>
            <h3 className='card__list'>В тариф входит:</h3>
            <ul>
              <li className='card__list-item'>Все пункты тарифа Beginner</li>
              <li className='card__list-item'>Экспорт истории</li>
              <li className='card__list-item'>Рекомендации по приоритетам</li>
            </ul>
            <button className='card__btn' style={{background:'#5970FF',color:'white'}}>Подробнее</button>
        </div>
      </div>
      <div className='tariffCards__card tariffCards__card_business'>
      <div className='card__box'>
          <div className='card__title'>
            <h1>Business</h1>
            <section>Для корпоративных клиентов</section>
          </div>
          <div className='laptop'>
            <img src={laptop} alt='laptop' />
          </div> 
        </div>        
        <div className='card__body card__body_business card__body-size'>
            <span className='card__actual-tariff' style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className='card__price'>2 379 ₽<span className='card__old-price'>3 700 ₽</span></h2>
            <h3 className='card__list'>В тариф входит:</h3>
            <ul>
              <li className='card__list-item'>Все пункты тарифа Pro</li>
              <li className='card__list-item'>Безлимитное количество запросов</li>
              <li className='card__list-item card__list-03'>Приоритетная поддержка</li>
            </ul>
            <button className='card__btn' style={{background:'#5970FF',color:'white'}}>Подробнее</button>
        </div>
      </div>
    
    </div>
  )
}

export default TariffCards