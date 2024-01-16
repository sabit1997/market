import { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../client/instance';
import client from '../../client/client';
import SellerTopNavBar from '../../components/navBar/SellerTopNavBar';
import TextInputLimitBox from '../../components/input/TextInputLimitBox';
import NumberInputBox from '../../components/input/NumberInputBox';
import MS16pButton from '../../components/button/MS16pButton';
import MS16pWhiteButton from '../../components/button/MS16pWhiteButton';
import MButton from '../../components/button/MButton';
import MWhiteButton from '../../components/button/MWhiteButton';
import { CenterWarpper } from '../../components/common/Common';
import * as S from './EditProductPageStyle';
import PrecautionsTextBox from './PrecautionsTextBox';
import useInputs from '../../hooks/useInputs';

export default function EditProductPage() {
  const location = useLocation();
  const productBoxData = location.state.productBoxData;
  const navigate = useNavigate();
  const [firstBtn, setFirstBtn] = useState(true);
  const [secondBtn, setSecondBtn] = useState(false);
  const [shipping, setShipping] = useState('PARCEL');
  const [
    { productName, price, shippingFee, stock, productInfo },
    handleInput,
    handleInputs,
  ] = useInputs({
    productName: '',
    price: '',
    shippingFee: '',
    stock: '',
    productInfo: '',
  });

  const [image, setImage] = useState('');
  const token = localStorage.getItem('token');

  const [preview, setPreview] = useState('');
  const inpRef = useRef();

  // 수정 시 기존 값 가져오기

  useEffect(() => {
    if (productBoxData !== null)
      handleInputs({
        productName: productBoxData.product_name,
        price: productBoxData.price,
        shippingFee: productBoxData.shipping_fee,
        stock: productBoxData.stock,
        productInfo: productBoxData.product_info,
      });
  }, [handleInputs, productBoxData]);

  useEffect(() => {
    if (productBoxData !== null) {
      setImage(productBoxData.image);
      setShipping(productBoxData.shipping_method);
    }
  }, [productBoxData]);

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
    setImage(e.target.files[0]);
  }

  // 상품 등록
  function handleSubmit(e) {
    e.preventDefault();
    if (
      productBoxData === null &&
      productName &&
      price &&
      shipping &&
      shippingFee &&
      stock &&
      image &&
      productInfo
    ) {
      const formData = new FormData();
      formData.append('product_name', productName);
      formData.append('price', price);
      formData.append('shipping_method', shipping);
      formData.append('shipping_fee', shippingFee);
      formData.append('stock', stock);
      formData.append('product_info', productInfo);
      formData.append('image', image);
      client
        .post('/products/', formData, {
          headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          navigate('/sellercenter');
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      productBoxData !== null &&
      !preview &&
      productName &&
      price &&
      shipping &&
      shippingFee &&
      stock &&
      image &&
      productInfo
    ) {
      instance
        .patch(`/products/${productBoxData.product_id}/`, {
          product_name: productName,
          price: price,
          shipping_method: shipping,
          shipping_fee: shippingFee,
          stock: stock,
          products_info: productInfo,
        })
        .then(() => {
          navigate('/sellercenter');
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      productBoxData !== null &&
      preview &&
      productName &&
      price &&
      shipping &&
      shippingFee &&
      stock &&
      image &&
      productInfo
    ) {
      const formData = new FormData();
      formData.append('product_name', productName);
      formData.append('price', price);
      formData.append('shipping_method', shipping);
      formData.append('shipping_fee', shippingFee);
      formData.append('stock', stock);
      formData.append('product_info', productInfo);
      formData.append('image', image);

      client
        .put(`/products/${productBoxData.product_id}/`, formData, {
          headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          navigate('/sellercenter');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <CenterWarpper>
      <SellerTopNavBar />
      <S.Main onSubmit={handleSubmit}>
        <S.SideBar>
          <S.SideBarTilte>상품 등록</S.SideBarTilte>
          <PrecautionsTextBox />
        </S.SideBar>
        <S.EditSection>
          <S.TopSection>
            <S.ImgWarpper>
              <S.InputTitle>상품 이미지</S.InputTitle>
              <S.ImgPreveiw preview={preview} image={image}>
                <input
                  id="imageUploadInput"
                  type="file"
                  accept="image/*"
                  ref={inpRef}
                  onChange={handleImgPreview}
                  className="ir"
                />
                <S.ImgUploadButton htmlFor="imageUploadInput" />
              </S.ImgPreveiw>
            </S.ImgWarpper>
            <S.TextInputWarpper>
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
              <S.InputTitle>배송방법</S.InputTitle>
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
            </S.TextInputWarpper>
          </S.TopSection>
          <S.InputTitle>상품 상세</S.InputTitle>
          <S.EditerSection
            name="productInfo"
            value={productInfo}
            onChange={handleInput}
          />
          <S.ButtonWarpper>
            <MWhiteButton
              wd="200px"
              mobileWd="100px"
              value="취소"
              marginR="14px"
            />
            <MButton wd="200px" mobileWd="100px" value="저장하기" />
          </S.ButtonWarpper>
        </S.EditSection>
      </S.Main>
    </CenterWarpper>
  );
}
