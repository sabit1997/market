import styled from 'styled-components';

export default function MS16pButton(props) {
  return (
    <>
      <Button
        wd={props.wd}
        mobileWd={props.mobileWd}
        maxWd={props.maxWd}
        margin={props.margin}
        mobileMargin={props.mobileMargin}
        type={props.type}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button`
  width: ${(props) => props.wd};
  max-width: ${(props) => props.maxWd};
  height: 54px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  background-color: #21bf48;
  color: #fff;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.pd};
  flex-shrink: 0;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: ${(props) => props.mobileWd};
    height: 37px;
    margin: ${(props) => props.mobileMargin};
  }
`;
