export function checkout(value: any) {
    const url = 'post'
    const body = JSON.stringify(value)
}

import {useCartStore} from "../../store-pinia/cartStore.ts";
import {IProduct} from "./product.ts";
function _cartStore() {
    return useCartStore();
}

export function getCartTotalsCounts() {
    return _cartStore().totalCounts.productsCount
}

export function getAllSummaries() {
    return _cartStore().totalCounts
}

export function getProductCounts() {
    return _cartStore().productsCounts
}

export function getCartProducts() {
    return _cartStore().productsList
}

export function addToCart(product: IProduct) {
    _cartStore().setNewProductToCart(product)
}

export function addOneProduct(id: number, price: number) {
    _cartStore().addProductById(id, price)
}

export function deleteOneProduct(id: number, price: number) {
    _cartStore().subOneProductById(id, price)
}

export function deleteProductFromCart(id: number, price: number, count: number) {
    _cartStore().deleteProduct(id, price, count)
}

export function isInCart(id: number) {
    return useCartStore().checkingProductInCart(id)
}

export function clearCart() {
    _cartStore().clearCart()
}
