import { CartWarpper, PageTitle } from '../../components/cart/CartStyle';
import TopNavBar from '../../components/navBar/TopNavBar';
import TabTitle from '../../components/navBar/TabTitle';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

export default function Cart() {
  const type = 'f';
  // 데이터 불러오고 수정
  return (
    <>
      <TopNavBar />
      <CartWarpper>
        <PageTitle>장바구니</PageTitle>
        <TabTitle />
        {type === 'empty' ? <EmptyCart /> : <FilledCart />}
      </CartWarpper>
    </>
  );
}
