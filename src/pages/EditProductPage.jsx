import { useRef, useState } from 'react';
import instance from '../client/instance';
import client from '../client/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import EditProduct from '../template/editProduct/EditProduct';
import useInputs from '../hooks/useInputs';

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
  }, [productBoxData]);

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
    <EditProduct
      handleSubmit={handleSubmit}
      preview={preview}
      image={image}
      inpRef={inpRef}
      handleImgPreview={handleImgPreview}
      productName={productName}
      handleInput={handleInput}
      pride={price}
      handle1Btn={handle1Btn}
      handle2Btn={handle2Btn}
      shippingFee={shippingFee}
      stock={stock}
      productInfo={productInfo}
      firstBtn={firstBtn}
      secondBtn={secondBtn}
    />
  );
}
