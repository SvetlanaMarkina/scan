import React from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import './Carousel.css'
import clock from'./clock.svg';
import magnifier from'./magnifier.svg';
import protection from './protection.svg';
import { ReactComponent as ArrowRight } from './arrowRight.svg';
import { ReactComponent as ArrowLeft } from './arrowLeft.svg';

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRight 
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowLeft 
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
const Carousel = () => {
  const newWidth = useSelector(state => state.app.width)
  
  const slidesToShow = newWidth < 1100 ? 1 : 3;
  const settings = {
      slidesToScroll: 1,
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: slidesToShow,
      swipeToSlide: true,
      nextArrow: <RightArrow />,
      prevArrow: <LeftArrow />,  
    };
    return (
      <div>
        <h2 className="slider__title">почему именно мы</h2>
        <div className="slider">
          <Slider {...settings}>
            <div>
              <div className="slider__card">
                <img className="card__img" src={clock} alt='clock' />
                <section className="card__section">Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>
            <div>
              <div className="slider__card">
                <img className="card__img" src={magnifier} alt='magnifier' />
                <section className="card__section">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</section>
              </div>
            </div>
            <div>
              <div className="slider__card">
                <img className="card__img" src={protection} alt='protection' />
                <section className="card__section">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</section>
              </div>
            </div>
            <div>
              <div className="slider__card">
                <img className="card__img" src={clock} alt='clock' />
                <section className="card__section">Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>         
          </Slider>
        </div>
        
      </div>
    );
  }
export default Carousel;