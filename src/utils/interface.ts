export interface CounterState {
  isLoading: boolean;
  products: [];
  activeProduct: Product;
  productFetchStatus: string | null;
  totalProducts: number;
}

export interface CartState {
  isOpen: boolean;
  cart: [];
  favorites: [];
}

export interface ProductProps {
  topic: string;
  title: string;
  description: string;
  row: number;
  paginated: number;
}

export interface Product {
  category: string;
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  discountPercentage: number;
  images: Array<string>;
  rating: number;
  stock: number;
  description:string;
  brand:string,
  quantity:number,
}
