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
  onClickPageButton,
  totalPage,
  currentPage,
  loading,
  loginType,
}) {
  const pageList = Array.from({ length: totalPage }, (_, i) => (
    <PageWarpperItem
      key={i}
      onClick={() => onClickPageButton(i + 1)}
      color={currentPage === i ? '#21BF48' : '#000'}
    >
      {i + 1}
    </PageWarpperItem>
  ));

  const productList = productData?.map((x) => (
    <ProductList key={x.product_id} productData={x} />
  ));
  return (
    <PageWarpper>
      {loading && <Loading />}
      {(loginType === 'BUYER' || loginType === null) && (
        <TopNavBar productData={productData} />
      )}
      {loginType === 'SELLER' && <TopNavBar value="SELLER" />}
      <Carousel />
      <ProductListSection>{productList}</ProductListSection>
      <PageLiWarpper>{pageList}</PageLiWarpper>
      <Footer />
    </PageWarpper>
  );
}
