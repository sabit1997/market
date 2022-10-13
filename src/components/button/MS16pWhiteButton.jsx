import styled from 'styled-components';

export default function MS16pWhiteButton(props) {
  return (
    <>
      <Button
        wd={props.wd}
        margin={props.margin}
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
  height: 55px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  background-color: #fff;
  color: #767676;
  margin: ${(props) => props.margin};
  cursor: pointer;
  &:hover {
    border: 1px solid #767676;
    color: #000;
  }
`;
