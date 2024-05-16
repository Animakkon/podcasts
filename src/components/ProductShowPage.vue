<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import PageTemplate from "@/components/templates/PageTemplate.vue";
import ContentTemplate from "@/components/templates/ContentTemplate.vue";
import Loader from "@/components/general/Loader.vue";
import ProductService from "@/services/product.ts";
import BackButton from "@/components/components/BackButton.vue";
import AddThenGoToCartButton from "@/components/components/AddThenGoToCartButton.vue";
import {addToCart, isInCart} from "@/services/cart.ts";

onMounted(() => {
  inProcess.value = true

  titleProductId.value = route.params.id;

  productService$.getProductById(titleProductId.value.value).then((res) => {
    productToShow.value = res

    productInCart.value = isInCart(res.id)
  }).finally(() => {
    inProcess.value = false
  })

})

const productService$ = new ProductService()

const route = useRoute()

const productId = ref(0)
const titleProductId = computed({
  get() {
    return productId;
  },
  set(value) {
    productId.value = value;
  }
})

const product = ref({})
const productToShow = computed({
  get() {
    return product;
  },
  set(value) {
    product.value = value;
  }
})

const isLoading = ref(false)
const inProcess = computed({
  get() {
    return isLoading.value;
  },
  set(value) {
    isLoading.value = value
  }
})


const productInCart = ref(false)

function setIntoCart() {
  addToCart(product.value)
  productInCart.value = true
}

</script>

<template>
  <page-template>
    <template #main>
      <content-template>
        <Loader v-if="isLoading"></Loader>

        <template #left-content>
          <AddThenGoToCartButton :is-in-cart="productInCart"
                                 :product-id="titleProductId"
                                 @emit-product-to-cart="(n) => setIntoCart()"
          ></AddThenGoToCartButton>

          <back-button class="mb-4"></back-button>
        </template>

        <template #central-content v-if="!isLoading">
          <!--column 1-->
          <v-col>
            <v-img :src="productToShow.value.image"></v-img>
          </v-col>

          <!--column 2-->
          <v-col>
            <v-container>
              <h3>{{ productToShow.value.title }}</h3>

              <p>{{ productToShow.value.description }}</p>
            </v-container>

          </v-col>

        </template>
      </content-template>

    </template>

  </page-template>

</template>

<style scoped>
.v-responsive {
  max-width: 35vh;
}
</style>
