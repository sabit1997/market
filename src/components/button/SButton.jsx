import styled from 'styled-components';

export default function SButton(props) {
  return (
    <>
      <Button
        wd={props.wd}
        mobileWd={props.mobileWd}
        mobileHg={props.mobileHg}
        onClick={props.onClick}
        type={props.type}
      >
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button`
  width: ${(props) => props.wd};
  height: 40px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: ${(props) => props.mobileWd};
    height: ${(props) => props.mobileHg};
  }
`;
