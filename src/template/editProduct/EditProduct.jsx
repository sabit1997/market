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
  EditSection,
  TopSection,
  InputTitle,
  ImgPreveiw,
  ImgUploadButton,
  EditerSection,
  ButtonWarpper,
} from './EditProductStyle';
import PrecautionsTextBox from './PrecautionsTextBox';

export default function EditProduct({
  handleSubmit,
  preview,
  image,
  inpRef,
  handleImgPreview,
  productName,
  handleInput,
  price,
  handle1Btn,
  handle2Btn,
  shippingFee,
  stock,
  productInfo,
  firstBtn,
  secondBtn,
}) {
  return (
    <>
      <SellerTopNavBar />
      <Main onSubmit={handleSubmit}>
        <SideBar>
          <SideBarTilte>상품 등록</SideBarTilte>
          <PrecautionsTextBox />
        </SideBar>
        <EditSection>
          <TopSection>
            <div>
              <InputTitle>상품 이미지</InputTitle>
              <ImgPreveiw preview={preview} image={image}>
                <input
                  id="imageUploadInput"
                  type="file"
                  accept="image/*"
                  ref={inpRef}
                  onChange={handleImgPreview}
                  className="ir"
                />
                <ImgUploadButton htmlFor="imageUploadInput" />
              </ImgPreveiw>
            </div>
            <div>
              <TextInputLimitBox
                name="productName"
                value={productName}
                productName={productName}
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
                  mobileWd="120px"
                  margin="0 10px 16px 0"
                  value="택배, 소포, 등기"
                  type="button"
                  onClick={handle1Btn}
                />
              ) : (
                <MS16pWhiteButton
                  wd="220px"
                  mobileWd="120px"
                  margin="0 10px 16px 0"
                  value="택배, 소포, 등기"
                  type="button"
                  onClick={handle1Btn}
                />
              )}
              {secondBtn === true ? (
                <MS16pButton
                  wd="220px"
                  mobileWd="120px"
                  value="직접배송(화물배달)"
                  type="button"
                  onClick={handle2Btn}
                />
              ) : (
                <MS16pWhiteButton
                  wd="220px"
                  mobileWd="120px"
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
          <EditerSection
            name="productInfo"
            value={productInfo}
            onChange={handleInput}
          />
          <ButtonWarpper>
            <MWhiteButton
              wd="200px"
              mobileWd="100px"
              value="취소"
              marginR="14px"
            />
            <MButton wd="200px" mobileWd="100px" value="저장하기" />
          </ButtonWarpper>
        </EditSection>
      </Main>
    </>
  );
}
