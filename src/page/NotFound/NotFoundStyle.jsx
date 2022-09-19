import styled from 'styled-components';

export const PageWarpper = styled.section`
  width: 740px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotFoundImg = styled.img`
  width: 276px;
  height: 236px;
  float: left;
  margin-right: 50px;
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
