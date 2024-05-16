<script setup lang="ts">
import {ref, reactive, computed, onMounted, watch} from "vue"
import axios from "axios";
import {useField, useForm} from "vee-validate";

import ProductService, {IProduct} from "@/services/data/product.js"

import Loader from "./general/Loader.vue"
import ProductListItem from "./ShopPageContentProductsItems.vue"
import AddThenGoToCartButton from "@/components/components/AddThenGoToCartButton.vue";
import {addToCart, getProductCounts} from "@/services/data/cart.js";

const props = defineProps(['parentFilter'])
watch(props, (newVal) => {

  if (props.parentFilter && props.parentFilter.length) {
    inProcess.value = true

    const filtered = states.products.filter((el: IProduct) => el.title.toString().toLowerCase().includes(props.parentFilter.toString().toLowerCase())
        || el.price.toString().toLowerCase().includes(props.parentFilter.toString().toLowerCase())
    )

    calculatedProducts.value = filtered

    inProcess.value = false

  } else {
    resetAndGetList()
  }
})

onMounted(() => {
      inProcess.value = true
      _productsInCart.value = getProductCounts()

      axios.all([
        getProductsList(),
        getCathegoriesList()
      ]).then(
          axios.spread((_products, _cathegories) => {
            states.products = _products
            states.cathegories = _cathegories

            calculatedProducts.value = states.products

            inProcess.value = false
          })
      )
      return null
    }
)

const isLoading = ref(false)
let inProcess = computed({
  get() {
    return isLoading
  },
  set(val) {
    isLoading.value = val
  }
})

const productService$ = new ProductService()
let states = reactive({
  products: [],
  cathegories: []
});

const selectcategory = ref('')
watch(selectcategory, (newcategory) => {
  inProcess.value = true

  let req;
  if (!!newcategory) {
    req = productService$.getProductListBycategory(newcategory, states.products)
  } else {
    req = getProductsList()
  }

  req.then((result) => {
    calculatedProducts.value = result

    inProcess.value = false
  })
})

let products = ref([])
const calculatedProducts = computed({
  get() {
    return products
  },
  set(values) {
    products.value = values
  }
})

const productsInCart = ref([])
const _productsInCart = computed({
  get() {
    return productsInCart.value
  },
  set(products: Array<any>) {
    productsInCart.value = products
  }
})

const isInCart = (productId: number) => {
  return productsInCart.value.find(el => el.id === productId)
}

function getProductsList() {
  return productService$.getAllProductList()
}

function getCathegoriesList() {
  return productService$.getAllCathegories()
}

const {handleReset} = useForm()
const title = useField('title')
const price = useField('price')

function filterByFormValues() {
  const titleVal = title.value.value
  const hasTitle = titleVal && titleVal.length

  const priceVal = price.value.value
  const hasMaxVal = priceVal && priceVal[1]

  if (hasTitle || hasMaxVal) {
    inProcess.value = true

    const filtered = states.products.filter((el) => hasTitle && el.title.toLowerCase().includes(titleVal.toLowerCase().toString()) || hasMaxVal && el.price >= priceVal[0] && el.price <= priceVal[1])

    calculatedProducts.value = filtered

    inProcess.value = false
  } else {
    resetAndGetList()
  }
}

function setIntoCart(productId: string, product: IProduct) {
  addToCart(product)
}

function resetAndGetList() {
  handleReset()

  calculatedProducts.value = states.products
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <h3>Filter:</h3>
        <v-combobox :items="states.cathegories"
                    :disabled="isLoading"
                    v-model="selectcategory"
                    label="cathegories"
                    clearable
        >
        </v-combobox>

        <br>

        <h3>Search form:</h3>
        <v-sheet>
          <form @submit.prevent="filterByFormValues"
                :disabled="inProcess"
                name="searchForm"
          >
            <v-text-field v-model="title.value.value"
                          :error-messages="title.errorMessage.value"
                          :label="'Label'"
                          type="text" clearable
            ></v-text-field>

            <v-range-slider v-model="price.value.value"
                            :label="'Price'"
                            :min="0"
                            :max="5000"
                            step="1"
                            thumb-label="always"
                            clearable
            ></v-range-slider>

            <v-btn block
                   type="submit"
                   class="text-none text-black mb-4"
                   color="blue-grey-darken-3"
                   size="x-large"
                   variant="flat">Submit
            </v-btn>

            <v-btn @click="resetAndGetList"
                   block
                   class="text-none text-black mb-4"
                   color="orange-darken-1"
                   size="x-large"
                   variant="flat">Clear
            </v-btn>
          </form>
        </v-sheet>
      </v-col>

      <v-col>
        <Loader v-show="isLoading"/>

        <v-container v-show="!isLoading"
                     id="ProductList"
                     class="center-align">
          <v-row>
            <v-col v-for="product in products"
                   :key="product.id"
                   cols="4"
                   class="d-flex"
            >
              <ProductListItem
                  :product="product"
                  @productInfo="(n) => {$router.push({ name: 'ProductCard', params: { id: n } })}"
              >
                <template #buttons>
                  <AddThenGoToCartButton :product-id="product.id"
                                         :is-in-cart="isInCart(product.id)"
                                         @emit-product-to-cart="(id) => setIntoCart(id, product)"
                  >
                  </AddThenGoToCartButton>
                </template>
              </ProductListItem>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
.center-align {
  text-align: center;
}

</style>
