import {defineStore} from "pinia";
import {computed, ref} from "vue";
import ProductService from "../services/data/product.ts";

export const useProductsStore = defineStore('productsStore', () => {
    const catalog = ref([])
    const isLoading = ref(false)
    let isLoadingCatalog = computed({
        get(){
            return isLoading.value
        },
        set(value){
            isLoading.value = value
        }
    })

    const $productsService = new ProductService();

    function GET_LIST() {
        isLoadingCatalog.value = true
        $productsService.getAllProductList().then((_catalog) => {
            catalog.value = _catalog
            isLoadingCatalog.value = false
        })
    }

    return {
        catalog,
        isLoadingCatalog,
        GET_LIST
    }
})