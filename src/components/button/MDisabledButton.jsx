import styled from 'styled-components';

export default function MDisabledButton(props) {
  return (
    <>
      <Button wd={props.wd} marginR={props.marginR} basis={props.basis}>
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button`
  width: ${(props) => props.wd};
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #c4c4c4;
  color: #fff;
  border-radius: 5px;
  margin-right: ${(props) => props.marginR};
  flex-basis: ${(props) => props.basis};
  @media screen and (max-width: 390px) {
    height: 35px;
    font-size: 12px;
  }
`;
