<script setup lang="ts">
    const props = defineProps({
      product: {},
    })
</script>

<template> 
    <v-card 
        :subtitle="props.product.price + '$'"
        variant="tonal">
        <v-container>
            <img :src="props.product.image" alt="card-image" class="product-img">
            
            <h2> {{ props.product.title }} </h2>
        </v-container>

    </v-card>
</template>

<style>
  .v-card {
    width: 20em;    
  }

  .product-img {
    width: 50%;
  }

</style>
