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
            <TotalPriceTxt>??? ?????? ??????</TotalPriceTxt>
            <RightWarpper>
              <TotalQuantity>
                ??? ??????{' '}
                <TotalQuantityNum>{productDetail.stock}</TotalQuantityNum>???
              </TotalQuantity>
              <LPrice
                cl="#21BF48"
                value={(productDetail.price * amountQuantity)?.toLocaleString()}
              ></LPrice>
            </RightWarpper>
          </PriceWarpper>
          {loginType === 'SELLER' ? (
            <ButtonWarpper>
              <MDisabledButton basis="82.5%" marginR="2.7%" value="?????? ??????" />
              <MDisabledButton basis="39.68%" value="????????????" />
            </ButtonWarpper>
          ) : (
            <ButtonWarpper>
              <MButton
                value="?????? ??????"
                basis="82.5%"
                marginR="2.7%"
                onClick={handlePaymentButton}
              />
              <MDarkButton
                basis="39.68%"
                product_id={product_id}
                productDetail={productDetail}
                amountQuantity={amountQuantity}
                value="????????????"
                onClick={handleButton}
              />
            </ButtonWarpper>
          )}
        </ProductInfo>
      </ProductWarpper>
      <ButtonWarpper>
        <TabActiveButton value="??????" />
        <TabDisabledButton value="??????" />
        <TabDisabledButton value="Q&A" />
        <TabDisabledButton value="??????/????????????" />
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
