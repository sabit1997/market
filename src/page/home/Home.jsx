import BuyerHome from './BuyerHome';
import SellerHome from './SellerHome';

export default function Home() {
  const loginType = localStorage.getItem('type');
  if (loginType === 'SELLER') {
    return <SellerHome />;
  } else if (loginType === 'BUYER') {
    return <BuyerHome />;
  }
}
