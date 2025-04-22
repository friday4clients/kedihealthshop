import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import store from "@/public/products.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  description?: string;
  imageUrls?: string[];
  benefits: string[]
};

export type Store = Record<string, Product[]>;

export async function getStore(): Promise<Store> {
  const response = await fetch('http://localhost:3000/products.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
}


export async function getProducts(category: string): Promise<Product[]> {
  const store = await getStore();
  return store[category];
}

export async function getProductById(id: string, category: string): Promise<Product | undefined> {
  const products: Product[] = await getProducts(category);
  return products.find((product) => product.id === id);
}

export async function getCategories(): Promise<string[]> {
  const store: Store = await getStore();
  return Object.keys(store);
}
``