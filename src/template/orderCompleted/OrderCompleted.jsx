import { PageWarpper } from '../../components/common/Common';
import { TitleTxt, Img, Txt, RedTxt } from './OderCompletedStyle';
import { PaymentTabTitle } from '../../components/navBar/TabTitle';
import ProductInfo from '../../components/contents/ProductInfo';
import LButton from '../../components/button/LButton';
import shoppingBag from '../../assets/shopping_bag.png';

export default function OrderCompleted({
  date,
  orderNum,
  orderInfo,
  quantity,
  navigate,
}) {
  return (
    <PageWarpper>
      <TitleTxt>주문이 완료되었습니다.</TitleTxt>
      <Img src={shoppingBag} />
      <Txt>
        {date.toLocaleDateString('ko-kr')} 주문하신 상품의 주문번호는{' '}
        <RedTxt>{orderNum}</RedTxt> 입니다.
      </Txt>
      <PaymentTabTitle />
      {orderInfo.map((_, i) => (
        <ProductInfo
          orderInfo={orderInfo}
          quantity={quantity}
          i={i}
          key={orderInfo[i].product_id}
        />
      ))}
      <LButton
        value="홈 화면 가기"
        margin="40px 0 0 0"
        onClick={() => {
          navigate('/');
        }}
      />
    </PageWarpper>
  );
}
