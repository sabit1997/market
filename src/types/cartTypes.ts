export interface CheckedItems {
  [key: string]: boolean;
}
export interface CartItem {
  cart_item_id: number;
  is_active: boolean;
  my_cart: number;
  product_id: number;
  quantity: number;
}

interface CartData {
  cart_item_id: number;
  is_active: boolean;
  my_cart: number;
  product_id: number;
  quantity: number;
}

interface CartProductItem {
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

export interface CartProductListProps {
  cartData: CartData[];
  cartItem: CartProductItem[];
  i: number;
  setChecked: React.Dispatch<React.SetStateAction<CheckedItems>>;
  checked: CheckedItems;
  quantity: number[];
  setQuantity: React.Dispatch<React.SetStateAction<number[]>>;
  setCartData: React.Dispatch<React.SetStateAction<CartData[]>>;
}
