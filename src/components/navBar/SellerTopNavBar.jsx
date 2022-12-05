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
  width: 100%;
  height: 90px;
  padding-left: 6.94%;
  box-shadow: 0px 4px 5px 0px #0000001a;
  @media ${(props) => props.theme.tablet} {
    padding-left: 10px;
  }
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
