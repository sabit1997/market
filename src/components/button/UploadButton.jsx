import styled from 'styled-components';
import uploadIcon from '../../assets/icon-plus.svg';

export default function UploadButton() {
  return (
    <>
      <Button>
        <Img src={uploadIcon} />
        <p>상품 업로드</p>
      </Button>
    </>
  );
}

const Button = styled.button`
  width: 168px;
  height: 54px;
  background-color: #21bf48;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 9px;
`;
