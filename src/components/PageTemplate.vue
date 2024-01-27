<script setup lang="ts">
import Actions from '@/components/HeaderActions.vue'
</script>

<template>
  <header>
    <Actions/>

    <div>
      <slot name="header">123</slot>
    </div>
  </header>

  <main>
    <slot name="main"></slot>
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>

</template>

<style scoped>
header, main, footer {
  padding: 0.5rem;
  border: 1px dotted black;
}

</style>