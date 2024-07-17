import {defineStore} from "pinia";
import {computed, ref} from "vue";
import ProductService from "../services/data/product.ts";

export const useProductsStore = defineStore('productsStore', () => {
    const catalog = ref([])
    const isLoading = ref(false)

    const $productsService = new ProductService();

    function GET_LIST() {
        isLoading.value = true
        $productsService.getAllProductList()
            .then((_catalog) => {
                catalog.value = _catalog
            })
            .finally(() => {
                isLoading.value = false
            })
    }

    return {
        catalog,
        isLoadingCatalog: isLoading,
        GET_LIST
    }
})