import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {getAllProductList} from '../services/data/product.ts'

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

    function GET_LIST() {
        isLoadingCatalog.value = true
        getAllProductList().then((_catalog) => {
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