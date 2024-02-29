<script setup lang="ts">
const props = defineProps(['isInCart', 'productId'])

const emit = defineEmits(['emitProductToCart'])

function emitProductToCart() {
  emit('emitProductToCart', props.productId)
}

</script>

<template>
  <v-btn v-show="!isInCart"
         @click.stop.prevent="emitProductToCart()"
         density="comfortable"
         class="text-none text-black pa-0 mb-4"
         color="green-darken-1"
         block>
    Добавить
  </v-btn>
  <v-btn @click.stop.prevent="$router.push({ name: 'Cart'})"
         v-show="isInCart"
         density="comfortable"
         class="text-none text-green-lighten-5 pa-0 mb-4"
         color="green-lighten-4"
         block>
    В корзине
  </v-btn>
</template>

<style scoped>

</style>