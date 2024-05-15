import styled from 'styled-components';

import imgUploadButton from '../../assets/icon-img.png';

export const Main = styled.form`
  display: flex;
  width: 100%;
  max-width: 1720px;
  margin: 44px 5.2% 246px;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    padding: 0 5.2%;
  }
`;

export const SideBar = styled.section`
  margin-right: 80px;
  @media ${(props) => props.theme.tablet} {
    margin-right: 0;
  }
`;

export const SideBarTilte = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin-bottom: 42px;
  @media ${(props) => props.theme.mobile} {
    text-align: center;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  color: #eb5757;
`;

export const TextBox = styled.div`
  width: 320px;
  height: 346px;
  padding: 20px;
  background-color: #ffefe8;
  margin-top: 10px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: fit-content;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.252142857142857;
  margin-bottom: 17.53px;
  white-space: pre-line;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const EditSection = styled.section`
  width: 100%;
  max-width: 1320px;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  color: #767676;
  margin-bottom: 10px;
  margin-bottom: 10px;
`;

export const ImgWarpper = styled.div`
  width: 34.39%;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const TextInputWarpper = styled.div`
  width: 62.57%;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const ImgPreveiw = styled.section<{ preview: string; image: string }>`
  width: 100%;
  max-width: 454px;
  aspect-ratio: 1/1;
  background-color: #c4c4c4;
  background-image: ${(props) =>
    props.preview !== '' ? `url(${props.preview})` : `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-right: 40px;
  @media ${(props) => props.theme.tablet} {
    margin: 10px auto;
  }
`;

export const ImgUploadButton = styled.label`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${imgUploadButton});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EditerSection = styled.textarea`
  width: 100%;
  max-width: 1320px;
  height: 700px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  padding: 10px 20px;
  margin-bottom: 50px;
  resize: none;
`;

export const ButtonWarpper = styled.div`
  text-align: end;
`;
