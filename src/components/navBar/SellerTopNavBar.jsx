import styled from 'styled-components';
import logo from '../../assets/Logo-hodu.png';

export default function SellerTopNavBar() {
  return (
    <Warpper>
      <Logo src={logo} />
      <Txt>판매자 센터</Txt>
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 100px;
`;

const Logo = styled.img`
  width: 80px;
  margin-right: 24px;
`;

const Txt = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.25;
`;
