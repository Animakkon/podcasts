<script setup lang="ts">
import Actions from '@/components/general/HeaderActions.vue'
</script>

<template>
  <header >
      <Actions/>

    <v-container class="d-flex justify-center pa-0">
      <v-col class="d-flex align-center" justify="center"
             cols="6">

        <slot name="header" ></slot>

      </v-col>
    </v-container>

    <v-divider></v-divider>
  </header>

  <main>
    <slot name="main"></slot>
  </main>

<!--  <footer>-->
<!--    <slot name="footer"></slot>-->
<!--  </footer>-->

</template>

<style scoped>
</style>