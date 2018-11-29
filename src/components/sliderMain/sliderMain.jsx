import React from 'react';
import Slider from "react-slick"
import nextIco from "../../images/next.svg";
import $ from 'jquery'


function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <button
      className={'next-arrow'}
      style={{}}
      onClick={onClick}>
      <img src={nextIco} className="icon"/>
    </button>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <button
      className={'prev-arrow'}
      style={{}}
      onClick={onClick}>
      <img src={nextIco} className="icon"/>
    </button>
  );
}

class SimpleSliderOne extends React.Component {
  render() {


    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      appendArrows: $('#arrows')
    };

    return (
      <Slider {...settings}>
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

    );
  }
}

export default SimpleSliderOne;

