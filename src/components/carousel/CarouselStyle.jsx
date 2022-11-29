import styled from 'styled-components';
import RightArrow from '../../assets/icon-right-arrow.svg';

export const CarouselWarpper = styled.section`
  display: flex;
  width: 1920px;
  height: 500px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 390px) {
    width: 100%;
    height: 200px;
  }
`;

export const CarouselBtn = styled.button`
  width: 60px;
  height: 124px;
  background-image: url(${RightArrow});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  &:last-child {
    left: 30px;
    transform: scaleX(-1) translateY(-50%);
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 500px;
  transform: translateX(${(props) => props.location}%);
  transition: all ease 2s;
  @media screen and (max-width: 390px) {
    height: 200px;
  }
`;
