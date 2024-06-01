import { CartItem } from './cartTypes';
import { ProductBoxData } from './ProductTypes';

export interface deleteModalProps {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartItemId?: number;
  setCartData?: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartData?: any;
  productBoxData?: ProductBoxData[];
  i?: number;
  setProductBoxData?: React.Dispatch<React.SetStateAction<any>>;
}

export interface ChangeNumModalProps {
  setQuantity: React.Dispatch<React.SetStateAction<number[]>>;
  quantity: number[];
  stock: number;
  cart_item_id: number;
  product_id: number;
  setAmountModal: React.Dispatch<React.SetStateAction<boolean>>;
  i: number;
  value: number;
}

export interface NotLoginProps {
  setAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ExistsModalProps {
  setExistModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ExcessModalProps {
  setExcessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SuccessCartProps {
  setSuccessCart: React.Dispatch<React.SetStateAction<boolean>>;
}
