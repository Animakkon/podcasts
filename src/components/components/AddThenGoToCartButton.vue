<script setup lang="ts">
const props = defineProps(['isInCart', 'productId'])

const emit = defineEmits(['emitProductToCart'])

function emitProductToCart() {
  emit('emitProductToCart', props.productId)
}

</script>

<template>
  <v-btn v-show="!isInCart"
         @click.stop.prevent="$emit('emitProductToCart',productId)"
         size="x-large"
         density="comfortable"
         class="text-none text-black ma-0 pa-0"
         color="green-darken-1"
         block>
    Добавить
  </v-btn>
  <v-btn @click.stop.prevent="$router.push({ name: 'Cart'})"
         v-show="isInCart"
         size="x-large"
         density="comfortable"
         class="text-none text-green-lighten-5 ma-0 pa-0"
         color="green-lighten-4"
         block>
    В корзине
  </v-btn>
</template>

<style scoped>

</style>