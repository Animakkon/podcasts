import {beforeEach, describe, expect} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "./cartStore.ts";
import {flushPromises} from "@vue/test-utils";

describe('CART STORE TESTS', () => {
    let cartStore;
    beforeEach(() => {
        setActivePinia(createPinia())
        cartStore = useCartStore()
    })

    describe('INIT EMPTY', () => {
        it('empty productList', () => {
            expect(cartStore.productsList.length).toBe(0)
        })

        it('empty productCounts', () => {
            expect(cartStore.productsCounts.length).toBe(0)
        })

        it('empty totalCounts', () => {
            expect(cartStore.totalCounts.productsCount).toBe(0)
            expect(cartStore.totalCounts.priceSum).toBe(0)
        })
    })

    describe('SET ONE NEW PRODUCT',  () => {
        beforeEach(async () => {
            cartStore.setNewProductToCart(mensClothingProductMock)

            await flushPromises()
        })

        it('product is in List', () => {
            expect(cartStore.productsList.length).toBe(1)
            expect(cartStore.productsList[0]).toEqual(mensClothingProductMock)
        })
        it('updated productCount', () => {
            expect(cartStore.productsCounts[0].id).toBe(mensClothingProductMock.id)
            expect(cartStore.productsCounts[0].count).toBe(1)
        })
        it('updated totals', () => {
            expect(cartStore.totalCounts.productsCount).toBe(1)
            expect(cartStore.totalCounts.priceSum).toBe(mensClothingProductMock.price)
        })
    })

    describe('SET ONE MORE PRODUCT',  () => {
        beforeEach(async () => {
            cartStore.setNewProductToCart(mensClothingProductMock)
            cartStore.addProductById(mensClothingProductMock.id, mensClothingProductMock.price)

            await flushPromises()
        })
        it('updated productCount', () => {
            expect(cartStore.productsCounts[0].id).toBe(mensClothingProductMock.id)
            expect(cartStore.productsCounts[0].count).toBe(2)
        })
        it('updated totals', () => {
            expect(cartStore.totalCounts.productsCount).toBe(2)
            expect(cartStore.totalCounts.priceSum).toBe(mensClothingProductMock.price * 2)
        })
    })
});