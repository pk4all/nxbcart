// @ts-ignore
import { Link,usePage } from "@inertiajs/react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  const HeaderNotification : React.FC = () =>  {
    const settings: import("react-slick").Settings = {
      dots: false, 
      infinite: true,    
      speed: 500,     
      slidesToShow: 1,  
      slidesToScroll: 1, 
      autoplay: true,   
      autoplaySpeed: 3000, 
      arrows: false,

    };

    return (
      <></>
  //     <div className="header-notification theme-bg-color overflow-hidden py-2">
  //       <div className="notification-slider">
  //       <Slider {...settings}>
  //         <div><h3>Slide 1</h3></div>
  //         <div><h3>Slide 2</h3></div>
  //         <div><h3>Slide 3</h3></div>
  //         <div><h3>Slide 4</h3></div>
  //       </Slider>
  //       </div>
  //       <button className="btn close-notification"><span>Close</span> <i className="fas fa-times"></i></button>
  // </div>
    );
  };

  export default HeaderNotification;
