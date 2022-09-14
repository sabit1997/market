import TopNavBar from '../../components/navBar/TopNavBar';
// import CarouselImg1 from '../assets/carouselImgs/CarouselImg1.png';
// import CarouselImg2 from '../assets/carouselImgs/CarouselImg2.png';
// import CarouselImg3 from '../assets/carouselImgs/CarouselImg3.png';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import { ProductListSection } from '../../components/home/HomeStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';

export default function BuyerHome() {
  return (
    <PageWarpper>
      <TopNavBar />
      <Carousel />
      <ProductListSection>
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </ProductListSection>
      <Footer />
    </PageWarpper>
  );
}
