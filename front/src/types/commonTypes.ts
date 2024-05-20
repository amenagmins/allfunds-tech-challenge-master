export type ProductType = {
  id: string;
  productName: string;
  productDescription: string;
  price: number;
  image_url: string;
  favorite: boolean;
  stock: number;
};

export type ProductTypeWithQuant = {
  id: string;
  price: number;
  productName: string;
  image_url: string;
  quantity: number;
  productDescription: string;
  favorite: boolean;
  stock: number;
};
