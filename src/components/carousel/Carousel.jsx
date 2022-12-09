import { CarouselWarpper, CarouselImg, CarouselBtn } from './CarouselStyle';
import carouselImg1 from '../../assets/carouselImgs/CarouselImg1.png';
import carouselImg2 from '../../assets/carouselImgs/CarouselImg2.png';
import carouselImg3 from '../../assets/carouselImgs/CarouselImg3.png';
import { useState } from 'react';

export default function Carousel() {
  const CarouselImgArr = [carouselImg1, carouselImg2, carouselImg3];
  const [location, setLocation] = useState(0);

  function handleRightClick() {
    if (Math.abs(location) === 200) {
      setLocation(0);
    } else {
      setLocation(location - 100);
    }
  }

  function handleLeftClick() {
    if (location === 0) {
      setLocation(-200);
    } else {
      setLocation(location + 100);
    }
  }

  return (
    <CarouselWarpper>
      {CarouselImgArr.map((x, i) => (
        <CarouselImg src={x} key={i} location={location} />
      ))}
      <CarouselBtn onClick={handleRightClick} />
      <CarouselBtn onClick={handleLeftClick} />
    </CarouselWarpper>
  );
}
