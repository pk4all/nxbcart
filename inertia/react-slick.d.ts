declare module "react-slick" {
    import { Component } from "react";
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      prevArrow?: JSX.Element;
      nextArrow?: JSX.Element;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
    }
    export default class Slider extends Component<{ settings?: Settings }> {}
  }
  