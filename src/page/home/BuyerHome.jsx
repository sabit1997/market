import TopNavBar from '../../components/navBar/TopNavBar';
// import CarouselImg1 from '../assets/carouselImgs/CarouselImg1.png';
// import CarouselImg2 from '../assets/carouselImgs/CarouselImg2.png';
// import CarouselImg3 from '../assets/carouselImgs/CarouselImg3.png';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import { ProductListSection } from '../../components/home/HomeStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import client from '../../client/client';
import { useEffect } from 'react';
import { useState } from 'react';

export default function BuyerHome() {
  const [productItem, setProductItem] = useState([]);
  useEffect(() => {
    client
      .get('/products/')
      .then((res) => {
        setProductItem(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const productList = productItem.map((_, i) => (
    <ProductList
      productItem={productItem}
      i={i}
      key={productItem[i].product_id}
    />
  ));

  return (
    <PageWarpper>
      <TopNavBar />
      <Carousel />
      <ProductListSection>{productList}</ProductListSection>
      <Footer />
    </PageWarpper>
  );
}
