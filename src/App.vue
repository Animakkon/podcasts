<script setup lang="ts">
import {onMounted} from "vue";
import {useProductsStore} from "@/store-pinia/productsStore.ts";

const _productsStore = () => useProductsStore()
onMounted(() => {
  _productsStore().GET_LIST()
})
</script>

<template>
    <router-view></router-view>
</template>

<style>
</style>