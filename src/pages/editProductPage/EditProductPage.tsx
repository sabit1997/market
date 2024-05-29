import { useRef, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import client from '../../client/client';
import instance from '../../client/instance';
import MButton from '../../components/button/MButton';
import MS16pButton from '../../components/button/MS16pButton';
import MS16pWhiteButton from '../../components/button/MS16pWhiteButton';
import MWhiteButton from '../../components/button/MWhiteButton';
import { CenterWarpper } from '../../components/common/Common';
import NumberInputBox from '../../components/input/NumberInputBox';
import TextInputLimitBox from '../../components/input/TextInputLimitBox';
import SellerTopNavBar from '../../components/navBar/SellerTopNavBar';
import useInputs from '../../hooks/useInputs';

import * as S from './EditProductPageStyle';
import PrecautionsTextBox from './PrecautionsTextBox';

interface ProductBoxData {
  product_name: string;
  price: string;
  shipping_fee: string;
  stock: string;
  product_info: string;
  image: string;
  product_id: string;
  shipping_method: 'PARCEL' | 'DELIVERY';
}

interface CheckRequiredInputsParams {
  productName: string;
  price: string;
  shipping: 'PARCEL' | 'DELIVERY';
  shippingFee: string;
  stock: string;
  image: string | File;
  productInfo: string;
  preview?: string;
}

interface Data {
  product_name: string;
  price: string;
  shipping_method: 'PARCEL' | 'DELIVERY';
  shipping_fee: string;
  stock: string;
  product_info: string;
  image?: string | File;
}

export default function EditProductPage() {
  const location = useLocation();
  const productBoxData: ProductBoxData = location.state.productBoxData;
  const navigate = useNavigate();
  const [shipping, setShipping] = useState(
    productBoxData?.shipping_method || 'PARCEL'
  );
  const [{ productName, price, shippingFee, stock, productInfo }, handleInput] =
    useInputs({
      productName: productBoxData?.product_name || '',
      price: productBoxData?.price || '',
      shippingFee: productBoxData?.shipping_fee || '',
      stock: productBoxData?.stock || '',
      productInfo: productBoxData?.product_info || '',
    });

  const [image, setImage] = useState<string | File>(
    productBoxData?.image || ''
  );
  const token = localStorage.getItem('token');

  const [preview, setPreview] = useState('');
  const inpRef = useRef();

  function handleParcelButton() {
    setShipping('PARCEL');
  }

  function handleDeliveryButton() {
    setShipping('DELIVERY');
  }

  function handleImgPreview(e: React.ChangeEvent<HTMLInputElement>) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  function checkRequiredInputs(inputs: CheckRequiredInputsParams) {
    for (const key in inputs) {
      if (!inputs[key]) {
        return false;
      }
    }
    return true;
  }

  function isEdit(originalPost: ProductBoxData) {
    return !!originalPost;
  }

  function createFormData(data: Data) {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return formData;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const requiredInputs = {
      productName,
      price,
      shipping,
      shippingFee,
      stock,
      image,
      productInfo,
    };

    const data = {
      product_name: productName,
      price: price,
      shipping_method: shipping,
      shipping_fee: shippingFee,
      stock: stock,
      product_info: productInfo,
    };

    const dataWithImage = { ...data, image: image };

    if (!isEdit(productBoxData) && checkRequiredInputs(requiredInputs)) {
      const formData = createFormData(dataWithImage);

      client
        .post('/products/', formData, {
          headers: {
            'Authorization': `JWT ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          navigate('/sellercenter');
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      isEdit(productBoxData) &&
      checkRequiredInputs({ ...requiredInputs, preview })
    ) {
      const formData = createFormData(dataWithImage);

      client
        .put(`/products/${productBoxData.product_id}/`, formData, {
          headers: {
            'Authorization': `JWT ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          navigate('/sellercenter');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      instance
        .patch(`/products/${productBoxData.product_id}/`, { data })
        .then(() => {
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
              <S.ImgPreveiw
                preview={preview}
                image={typeof image === 'string' ? image : undefined}
              >
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
              {shipping === 'PARCEL' ? (
                <MS16pButton
                  wd="220px"
                  mobileWd="120px"
                  margin="0 10px 16px 0"
                  value="택배, 소포, 등기"
                  type="button"
                  onClick={handleParcelButton}
                />
              ) : (
                <MS16pWhiteButton
                  wd="220px"
                  mobileWd="120px"
                  margin="0 10px 16px 0"
                  value="택배, 소포, 등기"
                  type="button"
                  onClick={handleParcelButton}
                />
              )}
              {shipping === 'DELIVERY' ? (
                <MS16pButton
                  wd="220px"
                  mobileWd="120px"
                  value="직접배송(화물배달)"
                  type="button"
                  onClick={handleDeliveryButton}
                />
              ) : (
                <MS16pWhiteButton
                  wd="220px"
                  mobileWd="120px"
                  value="직접배송(화물배달)"
                  type="button"
                  onClick={handleDeliveryButton}
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
            // onChange={handleInput}
          />
          <S.ButtonWarpper>
            <MWhiteButton
              wd="200px"
              mobileWd="100px"
              value="취소"
              marginR="14px"
              onClick={() => {
                navigate('/sellercenter');
              }}
            />
            <MButton wd="200px" mobileWd="100px" value="저장하기" />
          </S.ButtonWarpper>
        </S.EditSection>
      </S.Main>
    </CenterWarpper>
  );
}
