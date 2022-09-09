import styled from 'styled-components';
import TopNavBar from '../components/TopNavBar';
// import CarouselImg1 from '../assets/carouselImgs/CarouselImg1.png';
// import CarouselImg2 from '../assets/carouselImgs/CarouselImg2.png';
// import CarouselImg3 from '../assets/carouselImgs/CarouselImg3.png';
import RightArrow from '../assets/icon-rhigt-arrow.svg';
import insta from '../assets/icon-insta.svg';
import facebook from '../assets/icon-fb.svg';
import youtube from '../assets/icon-yt.svg';
import ProductList from '../components/ProductList';

export default function Home() {
  // const CarouselImgArr = [CarouselImg1, CarouselImg2, CarouselImg3];
  return (
    <PageWarpper>
      <TopNavBar />
      <Carousel>
        <CarouselImg src="" />
        <CarouselBtn />
        <CarouselBtn />
      </Carousel>
      <ProductListSection>
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </ProductListSection>
      <Footer>
        <TopWarpper>
          <FooterNav>
            <FooterLi>호두샵 소개</FooterLi>
            <FooterLi>이용약관</FooterLi>
            <FooterLi>개인정보처리방침</FooterLi>
            <FooterLi>전자금융거래약관</FooterLi>
            <FooterLi>청소년보호정책</FooterLi>
            <FooterLi>제휴문의</FooterLi>
          </FooterNav>
          <Sns>
            <SnsItem />
            <SnsItem />
            <SnsItem />
          </Sns>
        </TopWarpper>
        <Dl>
          <Dt className="ir">회사명</Dt>
          <Dd>(주)HODU SHOP</Dd>
          <Dt className="ir">주소</Dt>
          <Dd>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</Dd>
          <Dt>사업자 번호</Dt>
          <Dd>000-0000-0000 | 통신판매업</Dd>
          <Dt>대표</Dt>
          <Dd>김호두</Dd>
        </Dl>
      </Footer>
    </PageWarpper>
  );
}

const PageWarpper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
const ProductListSection = styled.ul`
  width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px 78px;
  padding: 80px 0 180px;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 60px 0 63px;
`;
const FooterNav = styled.ul`
  display: flex;
`;

const FooterLi = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.252142857142857;
  margin-right: 32px;
  position: relative;
  &::after {
    content: '|';
    position: absolute;
    right: -16px;
  }
  &:nth-child(3) {
    font-weight: 700;
  }
  &:last-child {
    margin-right: 0;
    &::after {
      content: '';
    }
  }
`;

const TopWarpper = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 53px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: -30px;
  }
`;

const Sns = styled.ul`
  display: flex;
`;

const SnsItem = styled.li`
  width: 32px;
  height: 32px;
  background-image: url(${insta});
  margin-right: 14px;
  &:nth-child(2) {
    background-image: url(${facebook});
  }
  &:last-child {
    background-image: url(${youtube});
    margin-right: 0;
  }
`;

const Dl = styled.dl`
  width: 1280px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.714285714285714;
  color: #767676;
  position: relative;
`;

const Dt = styled.dt`
  &::after {
    content: ' : ';
  }
`;

const Dd = styled.dd`
  &:first-child {
    font-weight: 700;
    /* 적용안됨 */
  }
`;
