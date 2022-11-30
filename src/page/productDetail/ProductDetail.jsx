import client from '../../client/client';
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
} from '../../components/productDetail/ProductDetail';
import { ExistsModal, ExcessModal } from '../../components/modal/Modal';
import Amount from '../../components/etc/Amount';
import LPrice from '../../components/etc/LPrice';
import MButton from '../../components/button/MButton';
import MDarkButton from '../../components/button/MDarkButton';
import TabActiveButton from '../../components/button/TabActiveButton';
import TabDisabledButton from '../../components/button/TabDisabledButton';
import MDisabledButton from '../../components/button/MDisabledButton';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../client/instance';
import { CenterWarpper } from '../../components/common/Common';

export default function ProductDetail() {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState('');
  const [amountQuantity, setAmountQuantity] = useState(1);
  const [cartData, setCartData] = useState([]);
  const [existModal, setExistModal] = useState(false);
  const [excessModal, setExcessModal] = useState(false);
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  const loginType = localStorage.getItem('type');

  useEffect(() => {
    client
      .get(`/products/${product_id}/`)
      .then((res) => {
        console.log(res);
        setProductDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product_id]);

  console.log(amountQuantity);

  function shippingValue(fee, method) {
    if (method === 'PARCEL') {
      if (fee === 0) {
        return '소포배송 / 무료배송';
      } else if (fee !== 0) {
        return `소포배송 / ${fee?.toLocaleString()}원`;
      }
    } else if (method === 'DELIVERY') {
      if (fee === 0) {
        return '택배배송 / 무료배송';
      } else if (fee !== 0) {
        return `택배배송 / ${fee?.toLocaleString()}원`;
      }
    }
  }

  // 장바구니에 있는지 check
  function isCheck() {
    instance
      .get('/cart/')
      .then((res) => {
        console.log(`axios 실행완료 ${res}`);
        setCartData(res.data.results);
        console.log(cartData);
        const condition = cartData.filter(
          (data) => data.product_id === productDetail.product_id
        ).length;
        if (condition === 0) {
          setCheck((check) => {
            return check;
          });
          console.log('트루 됨');
          console.log(check);
        } else if (condition > 0) {
          setCheck((check) => {
            return !check;
          });
          console.log(check);
          console.log('폴스 됨');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 장바구니에 넣기
  // setState 바로 변경되지 않음
  async function handleButton() {
    isCheck();
    if (check) {
      instance
        .post('/cart/', {
          product_id: product_id,
          quantity: amountQuantity,
          check: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          if (
            error.response.data.FAIL_message ===
            '현재 재고보다 더 많은 수량을 담을 수 없습니다.'
          ) {
            setExcessModal(true);
          }
        });
    } else if (!check) {
      instance
        .post('/cart/', {
          product_id: product_id,
          quantity: amountQuantity,
          check: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          if (
            error.response.data.FAIL_message ===
            '현재 재고보다 더 많은 수량을 담을 수 없습니다.'
          ) {
            setExcessModal(true);
          }
        });
      console.log('중복');
      setExistModal(true);
    }
  }

  // 바로 구매 버튼 클릭
  function handlePaymentButton() {
    navigate('/payment', {
      state: { orderProduct: [productDetail], quantity: [amountQuantity] },
    });
  }

  console.log(amountQuantity);
  return (
    <CenterWarpper>
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
        {existModal === true ? (
          <ExistsModal setExistModal={setExistModal} />
        ) : excessModal === true ? (
          <ExcessModal setExcessModal={setExcessModal} />
        ) : null}
      </ProductWarpper>
      <ButtonWarpper>
        <TabActiveButton value="버튼" />
        <TabDisabledButton value="리뷰" />
        <TabDisabledButton value="Q&A" />
        <TabDisabledButton value="반품/교환정보" />
      </ButtonWarpper>
    </CenterWarpper>
  );
}
