import styled from 'styled-components';

export const CartWarpper = styled.section`
  width: 1920px;
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
`;

export const TotalPriceSection = styled.section`
  width: 1280px;
  height: 150px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 40px;
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
