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
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import { useNavigate } from 'react-router-dom';

export default function BuyerHome() {
  const { productData } = useProductDataContext();
  const loginType = localStorage.getItem('type');
  const navigate = useNavigate();

  // 경고창 모달
  const [alertModal, setAlertModal] = useState(false);

  const productList = productData.map((_, i) => (
    <ProductList
      productData={productData}
      i={i}
      key={productData[i].product_id}
    />
  ));

  // 비로그인 상태에서 장바구니 버튼 클릭 시 경고창
  function handleCartButton() {
    if (localStorage.getItem('token') === null) {
      setAlertModal(true);
    } else {
      setAlertModal(false);
      navigate('/cart');
    }
  }

  return (
    <PageWarpper>
      {loginType === 'BUYER' || loginType === null ? (
        <TopNavBar handleCartButton={handleCartButton} />
      ) : loginType === 'SELLER' ? (
        <TopNavBar value="seller" />
      ) : null}
      {alertModal === true ? (
        <Modal category="notLogin" setAlertModal={setAlertModal} />
      ) : null}
      <Carousel />
      <ProductListSection>{productList}</ProductListSection>
      <Footer />
    </PageWarpper>
  );
}
