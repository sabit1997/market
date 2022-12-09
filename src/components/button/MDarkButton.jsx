import styled from 'styled-components';

export default function MDarkButton({ value, wd, onClick, basis }) {
  return (
    <Button wd={wd} onClick={onClick} basis={basis}>
      {value}
    </Button>
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
  flex-basis: ${(props) => props.basis};
  @media screen and (max-width: 390px) {
    height: 35px;
    font-size: 12px;
  }
`;
