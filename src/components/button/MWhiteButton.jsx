import styled from 'styled-components';

export default function MWhiteButton(props) {
  return (
    <>
      <Button
        wd={props.wd}
        mobileWd={props.mobileWd}
        maxWd={props.maxWd}
        marginR={props.marginR}
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
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #fff;
  color: #767676;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-right: ${(props) => props.marginR};
  @media ${(props) => props.theme.mobile} {
    width: ${(props) => props.mobileWd};
    height: 35px;
    font-size: 12px;
  }
`;
