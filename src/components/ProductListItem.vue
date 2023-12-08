<script setup lang="ts">
    const props = defineProps({
        title: '',
        price: '',
        description: '',
        imageSrc: ''
    })
</script>

<template> 
    <v-card 
        :subtitle="props.price + '$'"
        variant="tonal">
        <v-container>
            <img :src="props.imageSrc" alt="card-image" class="product-img">
            
            <h2> {{ props.title }} </h2>
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
