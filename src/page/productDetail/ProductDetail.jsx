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
import Amount from '../../components/etc/Amount';
import LPrice from '../../components/etc/LPrice';
import MButton from '../../components/button/MButton';
import MDarkButton from '../../components/button/MDarkButton';
import TabActiveButton from '../../components/button/TabActiveButton';
import TabDisabledButton from '../../components/button/TabDisabledButton';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import instance from '../../client/instance';

export default function ProductDetail() {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState('');
  const [amountQuantity, setAmountQuantity] = useState(1);
  const location = useLocation();

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

  // 장바구니에 넣기

  function handleButton() {
    instance
      .post('/cart/', {
        product_id: product_id,
        quantity: amountQuantity,
        check: true,
        // check 채우는건 cart 불러오고 나서 할 수 있을듯
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(productDetail.stock);
  console.log(product_id);
  console.log(location.pathname);
  return (
    <>
      <TopNavBar />
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
          <MButton wd="416px" value="바로 구매" marginR="14px" />
          <MDarkButton
            wd="200px"
            product_id={product_id}
            productDetail={productDetail}
            amountQuantity={amountQuantity}
            value="장바구니"
            onClick={handleButton}
          />
        </ProductInfo>
      </ProductWarpper>
      <ButtonWarpper>
        <TabActiveButton value="버튼" />
        <TabDisabledButton value="리뷰" />
        <TabDisabledButton value="Q&A" />
        <TabDisabledButton value="반품/교환정보" />
      </ButtonWarpper>
    </>
  );
}
