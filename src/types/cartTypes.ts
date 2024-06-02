import React, { Key } from 'react';

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

export interface CartData {
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

export interface OrderInfo {
  [x: string]: Key;
  image: string;
  seller_store: string;
  product_name: string;
  shipping_fee: number;
  price: number;
}

export interface FilledCartProps {
  cartData: CartData[];
  checked: CheckedItems;
  setChecked: React.Dispatch<React.SetStateAction<CheckedItems>>;
  setCartData: React.Dispatch<React.SetStateAction<CartData[]>>;
  handleOrderBtn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  quantity: number[];
  setQuantity: React.Dispatch<React.SetStateAction<number[]>>;
  cartItem: CartProductItem[];
}
