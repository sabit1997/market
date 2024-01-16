import styled from 'styled-components';
import plus from '../../assets/icon-plus-line.svg';
import minus from '../../assets/icon-minus-line.svg';

export const CartWarpper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
`;

export const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin-bottom: 52px;
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

export const TotalPriceSection = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 150px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin: 70px 0 40px;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    margin: 20px 0 10px;
  }
`;

export const Icon = styled.div`
  width: 34px;
  height: 34px;
  background-image: url(${minus});
  background-position: center;
  background-color: #fff;
  background-repeat: no-repeat;
  border-radius: 50%;
  &:nth-child(4) {
    background-image: url(${plus});
  }
  @media ${(props) => props.theme.mobile} {
    width: 20px;
    height: 20px;
    background-size: 10px;
  }
`;

export const EmptyTxt = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.252222222222222;
  text-align: center;
  margin-top: 200px;
  &::after {
    content: '원하는 상품을 장바구니에 담아보세요!';
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.252142857142857;
    color: #767676;
    margin-top: 17px;
  }
`;
