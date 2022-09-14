import BuyerHome from './BuyerHome';
import SellerHome from './SellerHome';

export default function Home() {
  // logintype 나눠주기
  const loginType = 'seller';
  return <>{loginType === 'buyer' ? <BuyerHome /> : <SellerHome />}</>;
}
