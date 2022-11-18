import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/Logo-hodu.png';

export default function SellerTopNavBar() {
  const navigate = useNavigate();
  return (
    <Warpper>
      <Logo
        src={logo}
        onClick={() => {
          navigate('/');
        }}
      />
      <Txt>판매자 센터</Txt>
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 1920px;
  padding: 26px 0 26px 100px;
  box-shadow: 0px 4px 5px 0px #0000001a;
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
