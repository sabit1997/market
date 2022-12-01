import styled from 'styled-components';

export default function MButton(props) {
  return (
    <>
      <Button
        wd={props.wd}
        maxWd={props.maxWd}
        marginR={props.marginR}
        basis={props.basis}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button`
  max-width: ${(props) => props.maxWd};
  width: ${(props) => props.wd};
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #21bf48;
  color: #fff;
  border-radius: 5px;
  margin-right: ${(props) => props.marginR};
  flex-basis: ${(props) => props.basis};
  @media ${(props) => props.theme.mobile} {
    height: 35px;
    font-size: 12px;
  }
`;
