import styled from 'styled-components';

export default function MDarkButton(props) {
  return (
    <>
      <Button wd={props.wd}>{props.value}</Button>
    </>
  );
}

const Button = styled.button`
  width: ${(props) => props.wd};
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #767676;
  color: #fff;
  border-radius: 5px;
`;
