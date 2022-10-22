import TopNavBar from '../../components/navBar/TopNavBar';
// import CarouselImg1 from '../assets/carouselImgs/CarouselImg1.png';
// import CarouselImg2 from '../assets/carouselImgs/CarouselImg2.png';
// import CarouselImg3 from '../assets/carouselImgs/CarouselImg3.png';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import { ProductListSection } from '../../components/home/HomeStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import { useProductDataContext } from '../../context/ProductDataContext';

export default function BuyerHome() {
  const { productData } = useProductDataContext();
  const loginType = localStorage.getItem('type');

  // 경고창 모달

  const productList = productData.map((_, i) => (
    <ProductList
      productData={productData}
      i={i}
      key={productData[i].product_id}
    />
  ));

  return (
    <PageWarpper>
      {loginType === 'BUYER' || loginType === null ? (
        <TopNavBar />
      ) : loginType === 'SELLER' ? (
        <TopNavBar value="seller" />
      ) : null}
      <Carousel />
      <ProductListSection>{productList}</ProductListSection>
      <Footer />
    </PageWarpper>
  );
}
