<script lang="ts" setup>
  import ProductService from "../services/product.ts"
  import { ref, reactive } from "vue"
  import  Loader from "./Loader.vue"
  import  ProductListItem from "./ProductListItem.vue"

  const productService$ = new ProductService()
  const cathegories = productService$.getCathegoriesArray()

  let currentCathegory = ref('');  
  let isLoading: boolean = ref(false);
  let states = reactive({
    products: []
  });


  function setCurrentCathegory(cathegory: string) {
    currentCathegory.value = cathegory
  }

   function getProductsIndex(cathegory: string) {
    isLoading.value = true;

    setTimeout(function() {
      states.products = productService$.getProductListByCathegories(cathegory)
      
      isLoading.value = false;
    }, 2000)
  }

</script>

<template>
  <v-container id="categoriesChoose" class="cathegories">

      <h1 class="center-align line"> CATHEGORIES: </h1>
      <br>

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
              @click="setCurrentCathegory(cathegory); getProductsIndex(cathegory)"
          >Show</v-btn>
        </v-card-actions>
      </v-card>

    </v-row>
  </v-container>

  <v-container  id="ProductList" class="center-align">
    <h2 v-if="currentCathegory">{{ currentCathegory }}:</h2>

    <Loader v-if="isLoading"/>

    <v-col v-if="!isLoading">

      <v-sheet class="d-flex flex-wrap bg-grey-lighten-5 list-justify-content">

        <ProductListItem 
          v-for="product in states.products"
          :key="product.id"

          :title="product.title"
          :price="product.price"
          :description="product.description"    
          :imageSrc="product.image"

          class="flex-1-2 product-card"
        ></ProductListItem>
        
      </v-sheet>
     
    </v-col>

  </v-container>
</template>

<style scoped>
  .center-align {
    text-align: center;
  }

  .line:before {
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

  .list-justify-content {
    justify-content: space-around;
  }

  .product-card {
    margin-bottom: 5%;
  }
</style>
