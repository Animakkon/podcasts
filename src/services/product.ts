import productList from '../../public/data/products'
import {$enum} from "ts-enum-util";

export enum ProductCathegories {
    MenClothing = "men's clothing",
    Jewelery = "jewelery",
    Electronics = "electronics",
    WomansClothing = "women's clothing",
}

export default class ProductService {
    getAllProductList() {
        return productList;
    }

    getProductListByCathegories(cathegory: string) {
        return productList.filter((product) => product.category === cathegory )
    }

    getCathegoriesArray() {
        return $enum(ProductCathegories).getValues()
    }

}
