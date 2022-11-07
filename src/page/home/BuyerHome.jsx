import TopNavBar from '../../components/navBar/TopNavBar';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import { ProductListSection } from '../../components/home/HomeStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import { useProductDataContext } from '../../context/ProductDataContext';

export default function BuyerHome() {
  const { productData } = useProductDataContext();
  const loginType = localStorage.getItem('type');

  const productList = productData.map((_, i) => (
    <ProductList
      productData={productData}
      i={i}
      key={productData[i].product_id}
    />
  ));

  return (
    <PageWarpper>
      {loginType === 'BUYER' ? (
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
