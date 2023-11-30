<script lang="ts" setup>
  import ProductService from "../services/product.ts"
  const productService$ = new ProductService()
  const cathegories = productService$.getCathegoriesArray()

  const currentCathegory = cathegories[0]

</script>

<template>
  <v-container class="cathegories">

      <h1 class="title"> CATHEGORIES: </h1>

    <v-row align="center" justify="center">
      <v-card
          v-for="cathegory in cathegories"
          :key="cathegory"
          :title="cathegory"
          variant="outlined"
      >
        <v-card-actions>
          <v-btn
              variant="outlined"
              append-icon="mdi-arrow-right"
              :disabled="currentCathegory === cathegory"
          >Show</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
  .title {
    text-align: center;
  }
  .title:before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background: lightgray;
    margin-bottom: 20px;
  }

  .cathegories {
    .v-container {
      padding-bottom: 5em;
    }
  }

</style>