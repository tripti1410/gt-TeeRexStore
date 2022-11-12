export interface Product {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
}
export interface Filter {
  [key: string]: string[];
}
export interface State {
  products: Array<Product>;
  productCount: number;
  filters: Array<Filter>;
}
