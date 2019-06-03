import React from "react";
import Slider from "react-slick";

class Slide extends React.Component {
  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      fade: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="https://s3.amazonaws.com/tara-images/akami.jpg"/>
        </div>
        <div>
          <img src="https://s3.amazonaws.com/tara-images/botonebi.JPG" alt=""/>
        </div>
        <div>
          <img src="https://s3.amazonaws.com/tara-images/hotate.JPG" alt=""/>
        </div>
        <div>
          <img src="https://s3.amazonaws.com/tara-images/kamasu.JPG" alt=""/>
        </div>
      </Slider>
    );
  }
}

export default Slide;