<script setup lang="ts">

import Loader from "@/components/general/Loader.vue";
import ProductListItem from "@/components/ShopPageContentProductsItems.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col id="left-content" cols="2">
        <slot name="left-content"></slot>
      </v-col>

      <v-col>
        <v-container class="center-align">
          <v-row align-content="center">
              <slot name="central-content"></slot>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>