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
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState('');
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

  console.log(productDetail.stock);
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
            value={productDetail.price}
            marginB="138px"
          ></LPrice>
          <Shipping>{`${productDetail.shipping_method} / ${productDetail.shipping_fee}`}</Shipping>
          <Amount marginT="52px" stock={productDetail.stock} />
          <PriceWarpper>
            <TotalPriceTxt>총 상품 금액</TotalPriceTxt>
            <RightWarpper>
              <TotalQuantity>
                총 수량{' '}
                <TotalQuantityNum>{productDetail.stock}</TotalQuantityNum>개
              </TotalQuantity>
              <LPrice cl="#21BF48" value={productDetail.price}></LPrice>
            </RightWarpper>
          </PriceWarpper>
          <MButton wd="416px" value="바로 구매" marginR="14px" />
          <MDarkButton
            wd="200px"
            value="장바구니"
            product_id={product_id}
            productDetail={productDetail}
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
