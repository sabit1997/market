import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import client from '../../client/client';
import instance from '../../client/instance';
import MButton from '../../components/button/MButton';
import MDarkButton from '../../components/button/MDarkButton';
import MDisabledButton from '../../components/button/MDisabledButton';
import TabActiveButton from '../../components/button/TabActiveButton';
import TabDisabledButton from '../../components/button/TabDisabledButton';
import { CenterWarpper } from '../../components/common/Common';
import Amount from '../../components/etc/Amount';
import Loading from '../../components/etc/Loading';
import LPrice from '../../components/etc/LPrice';
import * as M from '../../components/modal/Modal';
import TopNavBar from '../../components/navBar/TopNavBar';

import * as S from './ProductDetailPageStyle';

export interface ProductDetailData {
  created_at: string;
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  shipping_fee: number;
  shipping_method: 'PARCEL' | 'DELIVERY';
  stock: number;
  store_name: string;
  updated_at: string;
}

export default function ProductDetailPage() {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState<ProductDetailData | null>(
    null
  );
  const [amountQuantity, setAmountQuantity] = useState(1);
  const [existModal, setExistModal] = useState(false);
  const [excessModal, setExcessModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [successCart, setSuccessCart] = useState(false);
  const navigate = useNavigate();
  const loginType = localStorage.getItem('type') as 'BUYER' | 'SELLER';
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .get(`/products/${product_id}/`)
      .then((res) => {
        setProductDetail(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [product_id]);

  async function getToken() {
    if (localStorage.getItem('token') === null) {
      return false;
    } else {
      return true;
    }
  }

  function shippingValue(fee: number, method: 'PARCEL' | 'DELIVERY') {
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
  async function isCheck() {
    const res = await instance.get('/cart/');
    const result = res.data.results.filter(
      (data) => data.product_id === productDetail?.product_id
    ).length;
    if (result === 0) {
      return true;
    } else {
      return false;
    }
  }

  // 장바구니에 넣기

  async function handleButton() {
    const token = await getToken();
    const condition = await isCheck();
    if (!token) {
      setLoginModal(true);
    } else {
      if (condition) {
        try {
          instance.post('/cart/', {
            product_id: product_id,
            quantity: amountQuantity,
            check: true,
          });
          setSuccessCart(true);
        } catch (error) {
          if (
            error.response.data.FAIL_message ===
            '현재 재고보다 더 많은 수량을 담을 수 없습니다.'
          ) {
            setExcessModal(true);
          }
        }
      } else if (!condition) {
        try {
          instance.post('/cart/', {
            product_id: product_id,
            quantity: amountQuantity,
            check: true,
          });
          setExistModal(true);
        } catch (error) {
          if (
            error.response.data.FAIL_message ===
            '현재 재고보다 더 많은 수량을 담을 수 없습니다.'
          ) {
            setExcessModal(true);
          }
        }
      }
    }
  }

  // 바로 구매 버튼 클릭
  async function handlePaymentButton() {
    const token = await getToken();
    if (token) {
      navigate('/payment', {
        state: {
          orderProduct: [productDetail],
          quantity: [amountQuantity],
          orderKind: 'direct_order',
          productId: product_id,
        },
      });
    } else {
      setLoginModal(true);
    }
  }

  return (
    <CenterWarpper>
      {loading ? <Loading /> : null}
      <TopNavBar value={loginType} />
      <S.ProductWarpper>
        <S.ProductImg src={productDetail?.image} />
        <S.ProductInfo>
          <S.Seller>{productDetail?.store_name}</S.Seller>
          <S.ProductName>{productDetail?.product_name}</S.ProductName>
          <LPrice
            cl="#000"
            value={productDetail?.price?.toLocaleString()}
            marginB="138px"
          ></LPrice>
          <S.Shipping>
            {shippingValue(
              productDetail?.shipping_fee,
              productDetail?.shipping_method
            )}
          </S.Shipping>
          <Amount
            margin="52px 0 0"
            stock={productDetail?.stock}
            setAmountQuantity={setAmountQuantity}
            amountQuantity={amountQuantity}
            value={amountQuantity}
            product_id={product_id}
            // productDetail={productDetail}
            loginType={loginType}
          />
          <S.PriceWarpper>
            <S.TotalPriceTxt>총 상품 금액</S.TotalPriceTxt>
            <S.RightWarpper>
              <S.TotalQuantity>
                총 수량{' '}
                <S.TotalQuantityNum>{productDetail?.stock}</S.TotalQuantityNum>
                개
              </S.TotalQuantity>
              <LPrice
                cl="#21BF48"
                value={(
                  productDetail?.price * amountQuantity
                )?.toLocaleString()}
              ></LPrice>
            </S.RightWarpper>
          </S.PriceWarpper>
          {loginType === 'SELLER' ? (
            <S.ButtonWarpper>
              <MDisabledButton basis="82.5%" marginR="2.7%" value="바로 구매" />
              <MDisabledButton basis="39.68%" value="장바구니" />
            </S.ButtonWarpper>
          ) : (
            <S.ButtonWarpper>
              <MButton
                value="바로 구매"
                basis="82.5%"
                marginR="2.7%"
                onClick={handlePaymentButton}
              />
              <MDarkButton
                basis="39.68%"
                // product_id={product_id}
                // productDetail={productDetail}
                // amountQuantity={amountQuantity}
                value="장바구니"
                onClick={handleButton}
              />
            </S.ButtonWarpper>
          )}
        </S.ProductInfo>
      </S.ProductWarpper>
      <S.ButtonWarpper>
        <TabActiveButton value="버튼" />
        <TabDisabledButton value="리뷰" />
        <TabDisabledButton value="Q&A" />
        <TabDisabledButton value="반품/교환정보" />
      </S.ButtonWarpper>
      {existModal === true ? (
        <M.ExistsModal setExistModal={setExistModal} />
      ) : excessModal === true ? (
        <M.ExcessModal setExcessModal={setExcessModal} />
      ) : loginModal ? (
        <M.NotLogin setAlertModal={setLoginModal} />
      ) : successCart ? (
        <M.SuccessCart setSuccessCart={setSuccessCart} />
      ) : null}
    </CenterWarpper>
  );
}
