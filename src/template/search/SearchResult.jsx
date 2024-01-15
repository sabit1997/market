import { CenterWarpper } from '../../components/common/Common';
import { Title, ResultMessage, SearchKeyword } from './SearchResultStyle';
import ProductList from '../../components/contents/ProductList';
import { useLocation } from 'react-router-dom';
import TopNavBar from '../../components/navBar/TopNavBar';
import { ProductListSection } from '../../pages/mainPage/MainPageStyle';

export default function SearchResult() {
  const location = useLocation();
  const resultProducts = location.state.resultProducts;
  const searchInput = location.state.searchInput;
  const loginType = localStorage.getItem('type');
  return (
    <CenterWarpper>
      <TopNavBar value={loginType} />
      <Title>검색 결과</Title>
      <ResultMessage>
        <SearchKeyword>'{searchInput}'</SearchKeyword>에 대한 검색 결과는 총{' '}
        {resultProducts.length} 개 입니다.
      </ResultMessage>
      <ProductListSection>
        {resultProducts.map((x) => (
          <ProductList key={x.product_id} productData={x} />
        ))}
      </ProductListSection>
    </CenterWarpper>
  );
}
