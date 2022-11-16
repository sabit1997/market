import styled from 'styled-components';

export const ProductListSection = styled.ul`
  width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px 78px;
  padding: 80px 0 180px;
`;

export const PageLiWarpper = styled.ol`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const PageWarpperItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin-right: 10px;
  color: ${(props) => props.color};
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &::before {
    content: '[';
  }
  &::after {
    content: ']';
  }
`;
