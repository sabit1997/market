import styled from 'styled-components';

export const TopSection = styled.section`
  width: 1920px;
  display: flex;
  margin-top: 44px;
  margin-bottom: 42px;
  padding: 0 100px 0 100px;
  justify-content: space-between;
`;

export const RightWarpper = styled.div`
  display: flex;
`;

export const BoldTxt = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin-right: 16px;
`;

export const NormalTxt = styled.p`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.222222222222222;
  color: #21bf48;
`;

export const Main = styled.main`
  width: 1920px;
  display: flex;
  padding: 0 100px 96px 100px;
`;

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const ContentsSection = styled.section`
  width: 1440px;
  height: 884px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #f2f2f2;
  overflow: hidden;
`;

// SaleProductTitle 관련된 컴포넌트들 나중에 분리
export const SaleProducTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 53px 0 366px;
  border-bottom: 1px solid #c4c4c4;
  background-color: #fff;
`;

export const ProductTitleTxt = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  margin-right: ${(props) => props.marginR};
`;
