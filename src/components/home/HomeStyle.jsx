import styled from 'styled-components';

export const ProductListSection = styled.ul`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 80px 0 180px;
  @media ${(props) => props.theme.mobile} {
    width: fit-content;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0 20px;
  }
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
