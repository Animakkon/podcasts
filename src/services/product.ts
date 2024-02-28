import { get, post } from '../services/httpAxiosRequests.ts'

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

export default class ProductService {
    getAllProductList() {
        return get('products', {}, BASE_URL)
    }

    getAllCathegories() {
        const url = `${ENDPOINTS.Products}/${ENDPOINTS.Categories}`
        return get(url, {}, BASE_URL);
    }

    createProduct(body:string) {
        const url = `${ENDPOINTS.Products}`
        return post(url, body, {}, BASE_URL)
    }

    getProductById(id: string) {
        const url = `${ENDPOINTS.Products}/${id}`
        return get(url, {}, BASE_URL)
    }

    getProductListBycategory(cathegory: string, list: Array<IProduct>) {
        const res = list.filter((product) => product.category === cathegory)
        return Promise.resolve(res)
    }

}
