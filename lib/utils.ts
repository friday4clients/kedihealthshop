import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProductType = {
  product_id: string;
  title: string;
  category: string;
  price: number | string;
  description?: string;
  benefits?: string | string[];
  ingredients?: string | string[];
  pack_size?: string;
  img_url: string;
  precautions?: string | string[];
  rating: string;
  specification?: string;
  storage?: string;
  usage?: string | string[];
  functions?: string[];
  treatments?:string[];

};

export type Store = Record<string, ProductType[]>;

export async function getStore(): Promise<Store> {
  const response = await fetch('http://localhost:3000/products.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
}


export async function getProducts(category: string): Promise<ProductType[]> {
  const store = await getStore();
  return store[category.replaceAll("_", " ")];
}

export async function getProductById(id: string, category: string): Promise<ProductType | undefined> {
  const products: ProductType[] = await getProducts(category.replaceAll("_", " "));
  return products?.find((product) => product.product_id.toString() === id);
}

export async function getCategories(): Promise<string[]> {
  const store: Store = await getStore();
  return Object.keys(store);
}