import { useLocation, useNavigate } from 'react-router-dom';
import OrderCompleted from '../template/orderCompleted/OrderCompleted';

export default function OrderCompletedPage() {
  const location = useLocation();
  const orderInfo = location.state.orderInfo;
  const quantity = location.state.quantity;
  const orderNum = location.state.orderNum;
  const navigate = useNavigate();

  const date = new Date();

  return (
    <OrderCompleted
      date={date}
      orderNum={orderNum}
      orderInfo={orderInfo}
      quantity={quantity}
      navigate={navigate}
    />
  );
}
