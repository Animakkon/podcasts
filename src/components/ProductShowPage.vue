<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import PageTemplate from "@/components/templates/PageTemplate.vue";
import ContentTemplate from "@/components/templates/ContentTemplate.vue";
import Loader from "@/components/general/Loader.vue";
import ProductService from "@/services/product.ts";

onMounted(() => {
  inProcess.value = true

  titleProductId.value = route.params.id;

  productService$.getProductById(titleProductId.value.value).then((res) => {
    productToShow.value = res
  }).finally(() => {
    inProcess.value = false
  })


})

const productService$ = new ProductService()

const route = useRoute()

const productId = ref(0)
const titleProductId = computed({
  get () {
    return productId;
  },
  set (value) {
    productId.value = value;
  }
})

const product = ref({})
const productToShow = computed({
  get () {
    return product;
  },
  set (value) {
    product.value = value;
  }
})

const isLoading = ref(false)
const inProcess = computed({
  get () {
    return isLoading.value;
  },
  set (value) {
    isLoading.value = value
  }
})

</script>

<template>
  <page-template>
    <template #header>
      <h2>Карточка продукта: {{ titleProductId }}</h2>
    </template>

    <template #main>
      <content-template>
        <Loader v-if="isLoading"></Loader>

        <template #central-content v-if="!isLoading">
          {{ productToShow }}
        </template>
      </content-template>

    </template>

  </page-template>

</template>

<style scoped>

</style>