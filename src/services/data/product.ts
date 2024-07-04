import { get, post } from '../httpAxiosRequests.ts'

const BASE_URL = "https://fakestoreapi.com"

export enum ENDPOINTS {
    Products = "products",
    Categories = "categories",
    Category = "category"
}

export interface IProduct {
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export async function getProductListBycategory(category: string, list: Array<IProduct>) {
    const res = list.filter((product) => product.category === category)
    return Promise.resolve(res)
}

export async function getAllProductList() {
    return get('products', {}, BASE_URL)
}

export async function createProduct(body: string) {
    const url = `${ENDPOINTS.Products}`
    return post(url, body, {}, BASE_URL)
}

export async function getAllCategories() {
    const url = `${ENDPOINTS.Products}/${ENDPOINTS.Categories}`
    return get(url, {}, BASE_URL);
}

export async function getProductById(id: string) {
    const url = `${ENDPOINTS.Products}/${id}`
    return get(url, {}, BASE_URL)
}
