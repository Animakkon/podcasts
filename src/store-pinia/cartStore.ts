import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {IProduct} from "../services/product.ts";

export const useCartStore = defineStore('cartStore',
    () => {
        const productsList: Array<IProduct> = ref([])
        const productsCounts: Array<{ id: number, count: number }> = ref([])

        const totalCounts = reactive({
            productsCount: 0,
            priceSum: 0
        })

        function setNewProductToCart(product: IProduct) {
            productsList.value.push(product)

            increaseCountsOfNewProduct(product)
        }

        function addProductById(id: string, price: number) {
            const productCount = productsCounts.value.find((el) => el.id === id)
            productCount.count += 1

            additiveTotalCounts(price)
        }

        function subOneProductById(id: string, price: nubber) {
            const product = productsCounts.value.find((el) => el.id === id)
            product.count -= 1

            substractionTotalCounts(price)
        }

        function increaseCountsOfNewProduct(product: IProduct) {
            productsCounts.value.push({
                id: product.id,
                count: 1
            })

            additiveTotalCounts(product.price)
        }

        function additiveTotalCounts(price: number) {
            totalCounts.productsCount += 1
            totalCounts.priceSum = totalCounts.priceSum + price
        }

        function substractionTotalCounts(price: number) {
            totalCounts.productsCount -= 1
            totalCounts.priceSum = totalCounts.priceSum - price
        }

        function deleteProduct(id: number, price: number, count: number) {
            let newList = productsList.value.filter((el) => el.id !== id)
            productsList.value = newList

            let newCounts = productsCounts.value.filter((el) => el.id !== id)
            productsCounts.value = newCounts

            totalCounts.productsCount -= count

            const summary = price * count
            totalCounts.priceSum -= summary
        }

        function clearCart() {
            productsList.value = []

            productsCounts.value = []

            totalCounts.productsCount = 0
            totalCounts.priceSum = 0
        }

        const getProductById = (id: number) => {
            return productsList.value.length ? productsList.value.find((el) => el.id === id) : false
        }

        const checkingProductInCart = (id: number) => {
            return !!getProductById(id)
        }

        return {
            totalCounts,
            productsList,
            productsCounts,
            checkingProductInCart,
            setNewProductToCart,
            clearCart,
            addProductById,
            subOneProductById,
            deleteProduct
        }
    },
    {
        persist: true
    })