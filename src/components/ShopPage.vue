<script setup lang="ts">
import {useRoute} from 'vue-router'
import PageTemplate from "@/components/templates/PageTemplate.vue"
import Content from "@/components/ShopPageContent.vue"

import {computed, ref} from 'vue'
import Loader from "@/components/general/Loader.vue";
import {useProductsStore} from "@/store-pinia/productsStore.ts";

const route = useRoute()

const searchValue = ref('');
const childProp = ref('')

function submit(value?: string) {
  if (value) {
    childProp.value = searchValue.value
  }
}
function reset() {
  childProp.value = ''
  searchValue.value = ''
}

const _productsStore = () => useProductsStore()
let loading = computed(() => _productsStore().isLoadingCatalog)
let products = computed(() => _productsStore().catalog)

</script>

<template>
  <page-template>
    <template #header>
      <v-text-field v-model="searchValue"
                    @keydown.enter.prevent="submit"
                    @click:clear="reset"
                    hide-details="auto"
                    type="text"
                    label="Поиск"
                    prepend-inner-icon="mdi-magnify"
                    variant="underlined"
                    clearable
      ></v-text-field>
    </template>

    <template #main>
      <Loader v-show="loading"/>
      <Content v-show="!loading"
               :parentFilter="childProp"
               :PROD_LIST="products"
      ></Content>
    </template>
  </page-template>
</template>

<style scoped>

.line:before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background: lightgray;
  margin-bottom: 20px;
}
</style>
