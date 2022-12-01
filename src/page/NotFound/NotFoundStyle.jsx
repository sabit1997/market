import styled from 'styled-components';

export const PageWarpper = styled.section`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 15px;
  transform: translate(-50%, -50%);
  @media ${(props) => props.theme.tablet} {
    float: none;
    text-align: center;
  }
`;

export const NotFoundImg = styled.img`
  width: 276px;
  height: 236px;
  float: left;
  margin-right: 50px;
  @media ${(props) => props.theme.tablet} {
    float: none;
    margin: 0 0 15px 0;
  }
`;

export const NotFoundTxt = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  &:nth-child(3) {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.251875;
    color: #767676;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
