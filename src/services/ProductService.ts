import { Product } from "../types/Product";
const BASE_URL = 'https://fakestoreapi.com'
export const ProductService = {
    //get all
    getProducts: async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        return data;
    },
    //get one
    getProduct: async (id: number): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const data = await response.json();
        return data;
    },
    //create
    createProduct: async (product: Product):
        Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;

    }, //update 
    updateProduct: async (id: number, product: Product): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    }, //delete
    deleteProduct: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE"
        });
    }
}  
