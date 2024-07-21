import { describe, expect, it } from 'vitest'
import {
    createProduct,
    getAllCategories,
    getAllProductList,
    getProductById,
    getProductListByCategory
} from "@/services/data/product.ts"
import axios from "axios"

const URL = Object.freeze({
    UPRODUCTS: 'https://fakestoreapi.com/products',
    UCATEGORIES: 'https://fakestoreapi.com/products/categories',
    UPRODUCTBYID: 'https://fakestoreapi.com/products/1',
})

const mockGet = vi.spyOn(axios, 'get')

describe('PRODUCT SERVICE METHODS', () => {

    describe('is a functions:', () => {
        it.concurrent.each([
            [ "getAllProductList", getAllProductList ],
            [ "getProductListBycategory", getProductListByCategory ],
            [ "createProduct", createProduct ],
            [ "getAllCategories", getAllCategories ],
            [ "getProductById", getProductById ],
        ])('- %s', async (name, method) => {
            expect(typeof method).toBe('function');
        })
    })

    mockGet.mockImplementation((url) => {
        switch (url) {
            case URL.UPRODUCTS:
                return Promise.resolve({data: productsMock});
            case URL.UCATEGORIES:
                return Promise.resolve({data: categoriesMock});
            case URL.UPRODUCTBYID:
                return Promise.resolve({data: productsMock[0]});
            default:
                return Promise.reject(new Error());
        }
    })

    describe('called by correct url:', () => {
        it.concurrent.each([
            [ "getAllProductList", getAllProductList, URL.UPRODUCTS, null ],
            [ "createProduct", createProduct, URL.UPRODUCTS, "someBody" ],
            [ "getAllCategories", getAllCategories, URL.UCATEGORIES, null],
            [ "getProductById", getProductById, URL.UPRODUCTBYID, "1"],
        ])('- %s', async (name, method, expected, args) => {
            let request
            if (args) {
                request = await method(args)
            } else {
                request = await method()
            }
            expect(mockGet).toBeCalled(expected);
        })
    })

    describe('called by correct url:', () => {
        it.concurrent.each([
            [ "getAllProductList", getAllProductList, URL.UPRODUCTS, null ],
            [ "createProduct", createProduct, URL.UPRODUCTS, "someBody" ],
            [ "getAllCategories", getAllCategories, URL.UCATEGORIES, null],
            [ "getProductById", getProductById, URL.UPRODUCTBYID, "1"],
        ])('- %s', async (name, method, expected, args) => {
            let request
            if (args) {
                request = await method(args)
            } else {
                request = await method()
            }
            expect(mockGet).toBeCalled(expected);
        })
    })

    describe('getProductListByCategory:', async () => {
        const result = await getProductListByCategory(mensClothingCategoryMock, productsMock)

        it('returns IProduct[]', async () => {
            expect(result.every(elem => {
                return elem instanceof Object
            })).toBeTruthy();
        })

        it('returns products by category mens clothing', async () => {
            const arr = new Array(mensClothingProductMock)
            expect(result).toStrictEqual(arr)
        })
    })
})
