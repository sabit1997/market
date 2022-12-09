import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../client/instance';
import SellerCenter from '../template/sellerCenter/SellerCenter';

export default function SellerCenterPage() {
  const navigate = useNavigate();
  const [tabMenuTitle, setTabMenuTitle] = useState([
    {
      no: 1,
      text: '판매중인 상품',
      state: true,
    },
    {
      no: 2,
      text: '주문/배송',
      state: false,
    },
    {
      no: 3,
      text: '문의/리뷰',
      state: false,
    },
    {
      no: 4,
      text: '통계',
      state: false,
    },
    {
      no: 5,
      text: '스토어설정',
      state: false,
    },
  ]);

  const [productBoxData, setProductBoxData] = useState([]);

  // 판매자 상품 목록
  useEffect(() => {
    instance
      .get('/seller/')
      .then((res) => {
        setProductBoxData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productBoxData.length]);

  useEffect(() => {
    const findIndex = tabMenuTitle.findIndex((el) => el.no === 1);
    const copiedTabMenuTitle = [...tabMenuTitle];
    copiedTabMenuTitle[
      findIndex
    ].text = `판매중인 상품(${productBoxData.length})`;
    setTabMenuTitle(copiedTabMenuTitle);
  }, [productBoxData.length]);

  return (
    <SellerCenter
      tabMenuTitle={tabMenuTitle}
      productBoxData={productBoxData}
      navigate={navigate}
      setProductBoxData={setProductBoxData}
    />
  );
}
