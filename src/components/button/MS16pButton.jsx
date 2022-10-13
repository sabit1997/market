import styled from 'styled-components';
import client from '../../client/client';

export default function MS16pButton(props) {
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
  height: 54px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  background-color: #21bf48;
  color: #fff;
  margin: ${(props) => props.margin};
  flex-shrink: 0;
  cursor: pointer;
`;
