import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Header/Authorization/Loader/Loader';
import './ResultPageMain.css';
import women from './women.svg';
import Cards from './Cards';
import CarouselDesktop from './Carousel/CarouselDesktop';
import CarouselMobile from './Carousel/CarouselMobile';

const ResultPageMain = () => {
  let fundedDocs = useSelector(state => state.histograms.histogramInfo)
  const newWidth = useSelector(state => state.app.width)
  const isMobile = newWidth < 700
  const ChosenCarousel = isMobile ? CarouselMobile : CarouselDesktop
  const isChosenCarousel = fundedDocs ? <ChosenCarousel /> : <Loader />
  return (
    <main className='resultMain'>
      <div className='resultMain__wrap'>  
        <div className='resultMain__upper'>
          <div className='upper__box'>
            <h1 className='upper__title'>Ищем. Скоро будут результаты</h1>
            <section>Поиск может занять некоторое время, просим сохранять терпение.</section>
          </div>
          <div className='img__box'>
            <img src={women} alt='women'/>
          </div>
        </div>
        <div className='resultMain__middle'>
          <div className='upper__box'>
            <h1 className='upper__title upper__title_middle'>Общая сводка</h1>
            <section className='resultMain__section'>Найдено {fundedDocs?.length||0} варианта(ов)</section>
          </div>
          {isChosenCarousel}
        </div>
        <div className='resultMain__lower'>
          <div className='lower__box'>
            <h1 className='upper__title upper__title_middle'>cписок документов</h1>
            <Cards />
          </div>
        </div>
      </div>  
    </main>
  )
}

export default ResultPageMain