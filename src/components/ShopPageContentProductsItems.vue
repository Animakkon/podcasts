<script setup lang="ts">
//get
const props = defineProps({
  product: {}
})

</script>

<template>

  <v-sheet @click="$emit('productInfo', product.id)"
           :elevation="5"
           class="flex-1-1-100 d-flex flex-column justify-space-between">
    <div class="align-center">
      <p>{{ props.product.price + '$' }}</p>
    </div>
    <v-container class="h-75 flex-0-1-100 justify-space-between">
      <div class="d-flex h-75 flex-1-1-100 align-center">
        <v-img :src="props.product.image"
               alt="card-image"
               class="product-img h-auto w-auto "
        ></v-img>
      </div>

      <h3 class="h-25 teal-darken-4"> {{ props.product.title }} </h3>
    </v-container>

    <v-container class="h-25 flex-column-reverse d-flex">
      <slot name="buttons"></slot>
    </v-container>

  </v-sheet>

</template>

<style scoped>
</style>
