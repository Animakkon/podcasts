<script setup lang="ts">
    const props = defineProps({
      product: {},
    })
</script>

<template> 
    <v-card class="elevation-5 flex d-flex flex-column"
        :subtitle="props.product.price + '$'"
        variant="tonal">
        <v-container>
            <img :src="props.product.image" alt="card-image" class="product-img">
            
            <h2> {{ props.product.title }} </h2>
        </v-container>

    </v-card>
</template>

<style>
  .product-img {
    width: 50%;
  }
</style>
