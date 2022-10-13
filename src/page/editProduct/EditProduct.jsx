import SellerTopNavBar from '../../components/navBar/SellerTopNavBar';
import TextInputLimitBox from '../../components/input/TextInputLimitBox';
import NumberInputBox from '../../components/input/NumberInputBox';
import MS16pButton from '../../components/button/MS16pButton';
import MS16pWhiteButton from '../../components/button/MS16pWhiteButton';
import MButton from '../../components/button/MButton';
import MWhiteButton from '../../components/button/MWhiteButton';
import {
  Main,
  SideBar,
  SideBarTilte,
  Span,
  TextBox,
  Text,
  EditSection,
  TopSection,
  InputTitle,
  ImgPreveiw,
  ImgUploadButton,
  EditerSection,
  ButtonWarpper,
} from './EditProductStyle';
import instance from '../../client/instance';
import { useRef, useState } from 'react';

export default function EditProduct() {
  const [firstBtn, setFirstBtn] = useState(true);
  const [secondBtn, setSecondBtn] = useState(false);
  const [shipping, setShipping] = useState('PARCEL');
  const [inputs, setInputs] = useState({
    productName: '',
    price: '',
    shippingFee: '',
    stock: '',
    image: '',
  });

  const { productName, price, shippingFee, stock, image } = inputs; // 비구조화 할당을 통해 값 추출

  function handleInput(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  console.log(inputs);

  const [preview, setPreview] = useState('');
  const inpRef = useRef();
  console.log(preview);

  // 배송방법 선택 버튼
  function handle1Btn() {
    setFirstBtn(true);
    setSecondBtn(false);
    setShipping('PARCEL');
  }

  function handle2Btn() {
    setFirstBtn(false);
    setSecondBtn(true);
    setShipping('DELIVERY');
  }

  // 이미지 미리보기
  function handleImgPreview(e) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    const img = e.target.files[0];
    let formData = new FormData();
    formData.append('image', img);
  }

  function uploadImage(e) {}

  // 상품 등록
  function handleSubmit(e) {
    e.preventDefault();

    if (
      preview !== '' &&
      productName !== '' &&
      price !== '' &&
      shipping !== '' &&
      shippingFee !== '' &&
      stock !== ''
    ) {
      instance.post('/products/', {
        product_name: productName,
        price: price,
        shipping_method: shipping,
        shipping_fee: shippingFee,
        stock: stock,
        products_info: 'asdfe',
      });
    }
  }

  return (
    <>
      <SellerTopNavBar />
      <Main onSubmit={handleSubmit}>
        <SideBar>
          <SideBarTilte>상품 등록</SideBarTilte>
          <Span>*상품 등록 주의사항</Span>
          <TextBox>
            <Text>- 너무 귀여운 사진은 심장이 아파올 수 있습니다.</Text>
            <Text>
              - 유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다. 이상의
              가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
              황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의
              속에서 이것은 피가 보배를 황금시대의 싹이 사막이다.
            </Text>
            <Text>
              - 자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며,
              위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운 위하여
              인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
            </Text>
            <Text>
              - 가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의
              것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고,
              이것이다.
            </Text>
          </TextBox>
        </SideBar>
        <EditSection>
          <TopSection>
            <div>
              <InputTitle>상품 이미지</InputTitle>
              <ImgPreveiw preview={preview}>
                <input
                  id="imageUploadInput"
                  type="file"
                  accept="image/*"
                  ref={inpRef}
                  onChange={handleImgPreview}
                  className="ir"
                  name="image"
                  value={image}
                />
                <ImgUploadButton htmlFor="imageUploadInput" />
              </ImgPreveiw>
            </div>
            <div>
              <TextInputLimitBox
                name="productName"
                value={productName}
                onChange={handleInput}
              />
              <NumberInputBox
                title="판매가"
                unit="원"
                name="price"
                value={price}
                onChange={handleInput}
              />
              <InputTitle>배송방법</InputTitle>
              {firstBtn === true ? (
                <MS16pButton
                  wd="220px"
                  margin="0 10px 16px 0"
                  value="택배, 소포, 등기"
                  type="button"
                  onClick={handle1Btn}
                />
              ) : (
                <MS16pWhiteButton
                  wd="220px"
                  margin="0 10px 16px 0"
                  value="택배, 소포, 등기"
                  type="button"
                  onClick={handle1Btn}
                />
              )}
              {secondBtn === true ? (
                <MS16pButton
                  wd="220px"
                  value="직접배송(화물배달)"
                  type="button"
                  onClick={handle2Btn}
                />
              ) : (
                <MS16pWhiteButton
                  wd="220px"
                  value="직접배송(화물배달)"
                  type="button"
                  onClick={handle2Btn}
                />
              )}
              <NumberInputBox
                title="기본 배송비"
                unit="원"
                name="shippingFee"
                value={shippingFee}
                onChange={handleInput}
              />
              <NumberInputBox
                title="재고"
                unit="개"
                name="stock"
                value={stock}
                onChange={handleInput}
              />
            </div>
          </TopSection>
          <InputTitle>상품 상세</InputTitle>
          <EditerSection />
          <ButtonWarpper>
            <MWhiteButton wd="200px" value="취소" marginR="14px" />
            <MButton wd="200px" value="저장하기" />
          </ButtonWarpper>
        </EditSection>
      </Main>
    </>
  );
}
