import client from '../client/client';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../client/instance';
import ProductDetail from '../template/productDetail/ProductDetail';

export default function ProductDetailPage() {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState('');
  const [amountQuantity, setAmountQuantity] = useState(1);
  const [existModal, setExistModal] = useState(false);
  const [excessModal, setExcessModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [successCart, setSuccessCart] = useState(false);
  const navigate = useNavigate();
  const loginType = localStorage.getItem('type');
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
        console.log(error);
      });
  }, [product_id]);

  async function getToken() {
    if (localStorage.getItem('token') === null) {
      return false;
    } else {
      return true;
    }
  }

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
  async function isCheck() {
    const res = await instance.get('/cart/');
    const result = res.data.results.filter(
      (data) => data.product_id === productDetail.product_id
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
    <ProductDetail
      loading={loading}
      loginType={loginType}
      productDetail={productDetail}
      setAmountQuantity={setAmountQuantity}
      amountQuantity={amountQuantity}
      product_id={product_id}
      handlePaymentButton={handlePaymentButton}
      handleButton={handleButton}
      existModal={existModal}
      setExistModal={setExistModal}
      excessModal={excessModal}
      setExcessModal={setExcessModal}
      loginModal={loginModal}
      setLoginModal={setLoginModal}
      successCart={successCart}
      setSuccessCart={setSuccessCart}
      shippingValue={shippingValue}
    />
  );
}
