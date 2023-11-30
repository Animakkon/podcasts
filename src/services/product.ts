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

    getCathegoriesArray() {
        return $enum(ProductCathegories).getValues()
    }

}
