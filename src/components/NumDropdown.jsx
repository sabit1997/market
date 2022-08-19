import styled from 'styled-components';

export default function NumDropdown() {
  return (
    <Ul>
      <Li>010</Li>
      <Li>011</Li>
      <Li>016</Li>
      <Li>017</Li>
      <Li>018</Li>
      <Li>019</Li>
    </Ul>
  );
}

const Ul = styled.ul`
  width: 152px;
  height: 150px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow-y: scroll;
  text-align: center;
`;

const Li = styled.li`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: #000;
  &:hover {
    background: #e0e0e0;
  }
`;
