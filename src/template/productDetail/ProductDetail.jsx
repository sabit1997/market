import TopNavBar from '../../components/navBar/TopNavBar';
import {
  ProductWarpper,
  ProductImg,
  ProductInfo,
  Seller,
  ProductName,
  Shipping,
  PriceWarpper,
  TotalPriceTxt,
  RightWarpper,
  TotalQuantity,
  TotalQuantityNum,
  ButtonWarpper,
} from './ProductDetailStyle';
import {
  ExistsModal,
  ExcessModal,
  NotLogin,
  SuccessCart,
} from '../../components/modal/Modal';
import Amount from '../../components/etc/Amount';
import LPrice from '../../components/etc/LPrice';
import MButton from '../../components/button/MButton';
import MDarkButton from '../../components/button/MDarkButton';
import TabActiveButton from '../../components/button/TabActiveButton';
import TabDisabledButton from '../../components/button/TabDisabledButton';
import MDisabledButton from '../../components/button/MDisabledButton';
import { CenterWarpper } from '../../components/common/Common';
import Loading from '../../components/etc/Loading';

export default function ProductDetail({
  loading,
  loginType,
  productDetail,
  setAmountQuantity,
  amountQuantity,
  product_id,
  handlePaymentButton,
  handleButton,
  existModal,
  setExistModal,
  excessModal,
  setExcessModal,
  loginModal,
  setLoginModal,
  successCart,
  setSuccessCart,
  shippingValue,
}) {
  return (
    <CenterWarpper>
      {loading ? <Loading /> : null}
      <TopNavBar value={loginType} />
      <ProductWarpper>
        <ProductImg src={productDetail.image} />
        <ProductInfo>
          <Seller>{productDetail.store_name}</Seller>
          <ProductName>{productDetail.product_name}</ProductName>
          <LPrice
            cl="#000"
            value={productDetail.price?.toLocaleString()}
            marginB="138px"
          ></LPrice>
          <Shipping>
            {shippingValue(
              productDetail.shipping_fee,
              productDetail.shipping_method
            )}
          </Shipping>
          <Amount
            margin="52px 0 0"
            stock={productDetail.stock}
            setAmountQuantity={setAmountQuantity}
            amountQuantity={amountQuantity}
            value={amountQuantity}
            product_id={product_id}
            productDetail={productDetail}
            loginType={loginType}
          />
          <PriceWarpper>
            <TotalPriceTxt>총 상품 금액</TotalPriceTxt>
            <RightWarpper>
              <TotalQuantity>
                총 수량{' '}
                <TotalQuantityNum>{productDetail.stock}</TotalQuantityNum>개
              </TotalQuantity>
              <LPrice
                cl="#21BF48"
                value={(productDetail.price * amountQuantity)?.toLocaleString()}
              ></LPrice>
            </RightWarpper>
          </PriceWarpper>
          {loginType === 'SELLER' ? (
            <ButtonWarpper>
              <MDisabledButton basis="82.5%" marginR="2.7%" value="바로 구매" />
              <MDisabledButton basis="39.68%" value="장바구니" />
            </ButtonWarpper>
          ) : (
            <ButtonWarpper>
              <MButton
                value="바로 구매"
                basis="82.5%"
                marginR="2.7%"
                onClick={handlePaymentButton}
              />
              <MDarkButton
                basis="39.68%"
                product_id={product_id}
                productDetail={productDetail}
                amountQuantity={amountQuantity}
                value="장바구니"
                onClick={handleButton}
              />
            </ButtonWarpper>
          )}
        </ProductInfo>
      </ProductWarpper>
      <ButtonWarpper>
        <TabActiveButton value="버튼" />
        <TabDisabledButton value="리뷰" />
        <TabDisabledButton value="Q&A" />
        <TabDisabledButton value="반품/교환정보" />
      </ButtonWarpper>
      {existModal === true ? (
        <ExistsModal setExistModal={setExistModal} />
      ) : excessModal === true ? (
        <ExcessModal setExcessModal={setExcessModal} />
      ) : loginModal ? (
        <NotLogin setAlertModal={setLoginModal} />
      ) : successCart ? (
        <SuccessCart setSuccessCart={setSuccessCart} />
      ) : null}
    </CenterWarpper>
  );
}
