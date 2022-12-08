import { CartWarpper, PageTitle } from './CartStyle';
import TopNavBar from '../../components/navBar/TopNavBar';
import { CartTabTitle } from '../../components/navBar/TabTitle';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import { CenterWarpper } from '../../components/common/Common';
import Loading from '../../components/etc/Loading';

export function Cart({
  checked,
  setChecked,
  productData,
  loading,
  cartData,
  setCartData,
}) {
  return (
    <CenterWarpper>
      {loading ? <Loading /> : null}
      <TopNavBar />
      <CartWarpper>
        <PageTitle>장바구니</PageTitle>
        <CartTabTitle checked={checked} setChecked={setChecked} />
        {cartData.length === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart
            cartData={cartData}
            productData={productData}
            checked={checked}
            setChecked={setChecked}
            setCartData={setCartData}
          />
        )}
      </CartWarpper>
    </CenterWarpper>
  );
}
