import styled from 'styled-components';

export const TopSection = styled.section`
  width: 100%;
  display: flex;
  margin-top: 44px;
  margin-bottom: 42px;
  padding: 0 6.94%;
  justify-content: space-between;
  @media ${(props) => props.theme.tablet} {
    padding: 0 10px;
  }
`;

export const RightWarpper = styled.div`
  display: flex;
`;

export const BoldTxt = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin-right: 16px;
  @media ${(props) => props.theme.tablet} {
    font-size: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 19px;
  }
`;

export const NormalTxt = styled.p`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.222222222222222;
  color: #21bf48;
  @media ${(props) => props.theme.tablet} {
    font-size: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 19px;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  padding: 0 6.94% 96px 6.94%;
  @media ${(props) => props.theme.tablet} {
    padding: 0 10px 96px 10px;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media ${(props) => props.theme.tablet} {
    margin-right: 15px;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
    margin-right: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContentsSection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 884px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #f2f2f2;
  overflow: hidden;
  @media ${(props) => props.theme.mobile} {
    height: 500px;
  }
`;

export const SaleProducTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c4c4c4;
  background-color: #fff;
  padding-left: 5.55%;
`;

export const ProductTitleTxt = styled.p<{
  wd: string;
  minWd?: string;
  mg?: string;
}>`
  width: ${(props) => props.wd};
  min-width: ${(props) => props.minWd};
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 1.252222222222222;
  margin: ${(props) => props.mg};
  word-break: keep-all;
  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;
