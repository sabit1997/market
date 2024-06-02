export interface ProductBoxData {
  created_at: string;
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  shipping_fee: number;
  shipping_method: 'PARCEL' | 'DELIVERY';
  stock: number;
  store_name: string;
  updated_at: string;
}

export interface ProductBoxProps {
  i: number;
  productBoxData: ProductBoxData[];
  setProductBoxData: React.Dispatch<React.SetStateAction<ProductBoxData[]>>;
}
