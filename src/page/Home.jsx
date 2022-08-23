import styled from 'styled-components';
import TopNavBar from '../components/TopNavBar';
// import CarouselImg1 from '../assets/carouselImgs/CarouselImg1.png';
// import CarouselImg2 from '../assets/carouselImgs/CarouselImg2.png';
// import CarouselImg3 from '../assets/carouselImgs/CarouselImg3.png';
import RightArrow from '../assets/icon-rhigt-arrow.svg';

export default function Home() {
  // const CarouselImgArr = [CarouselImg1, CarouselImg2, CarouselImg3];
  return (
    <>
      <TopNavBar />
      <Carousel>
        <CarouselImg src="" />
        <CarouselBtn />
        <CarouselBtn />
      </Carousel>
      <ProductList>
        <li>
          <ProductImg src="" />
          <Seller>정예지</Seller>
          <ProductName>정예지</ProductName>
          <ProductPrice>25800</ProductPrice>
        </li>
      </ProductList>
    </>
  );
}

const Carousel = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
  position: relative;
`;

const CarouselBtn = styled.button`
  width: 60px;
  height: 124px;
  background-image: url(${RightArrow});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  &:last-child {
    left: 30px;
    transform: scaleX(-1) translateY(-50%);
  }
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 500px;
`;
const ProductList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px 78px;
  padding: 80px 0 180px;
`;

const ProductImg = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 16px;
`;

const Seller = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  margin-bottom: 10px;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.222222222222222;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.252083333333333;
  margin-right: 2px;
  &::after {
    content: '원';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.251875;
    vertical-align: middle;
  }
`;
