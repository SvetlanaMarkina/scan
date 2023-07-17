import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import './Carousel.css';
import { ReactComponent as RightChevron } from '../../CommonAccessMain/MainCarousel/Carousel/arrowRight.svg';
import { ReactComponent as LeftChevron } from '../../CommonAccessMain/MainCarousel/Carousel/arrowLeft.svg';
import Period from './Period';
import { objectSearchToSummary } from '../../../utils/objectSearchToSummary';
import {objectSearch} from '../../../MockData/objectSearch';

const CarouselMobile = () => {
    // const summary = objectSearchToSummary(objectSearch.data)
    const summary = useSelector(state => state.histograms.histogramInfo)
    
    function LeftArrow(props) {
      const { className, style, onClick } = props;
      return (
        <LeftChevron 
          className={className}
          style={{ ...style}}
          onClick={onClick}
        />
      );
    }
    function RightArrow(props) {
      const { className, style, onClick } = props;
      return (
        <RightChevron 
          className={className}
          style={{ ...style}}
          onClick={onClick}
        />
      );
    }
    const settings = {
        slidesToScroll: 1,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,  
      };
    return (
        <div className='blockMobile' >
          <div className='sectionsMobile'>
            <section className='sectionsMobile__item'>Период</section>
            <section className='sectionsMobile__item'>Всего</section>
            <section className='sectionsMobile__item'>Риски</section>
          </div>
          <div className='slider-wrapMobile'>
            <Slider {...settings} >
              {summary && summary.map((period)=><Period
              className='periodItemCssMobile'
              date={period.date}
              total={period.total}
              risk={period.risk}
              />)}
            </Slider>
          </div>          
        </div>
  )
}
export default CarouselMobile;