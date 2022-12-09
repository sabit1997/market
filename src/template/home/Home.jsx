import TopNavBar from '../../components/navBar/TopNavBar';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import {
  ProductListSection,
  PageLiWarpper,
  PageWarpperItem,
} from './HomeStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import Loading from '../../components/etc/Loading';

export default function Home({
  productData,
  handlePageClick,
  page,
  loading,
  loginType,
}) {
  // 페이지 나타내기
  const pageList = productData?.map((_, i) => (
    <PageWarpperItem
      key={i}
      onClick={handlePageClick}
      color={page === i ? '#21BF48' : '#000'}
    >
      {i + 1}
    </PageWarpperItem>
  ));

  const productList = productData[page]?.map((x) => (
    <ProductList key={x.product_id} productData={x} />
  ));
  return (
    <PageWarpper>
      {loading ? <Loading /> : null}
      {loginType === 'BUYER' || loginType === null ? (
        <TopNavBar productData={productData} />
      ) : loginType === 'SELLER' ? (
        <TopNavBar value="SELLER" />
      ) : null}
      <Carousel />
      <ProductListSection>{productList}</ProductListSection>
      <PageLiWarpper>{pageList}</PageLiWarpper>
      <Footer />
    </PageWarpper>
  );
}
