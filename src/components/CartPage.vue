<script setup lang="ts">
import PageTemplate from '@/components/templates/PageTemplate.vue'
import ContentTemplate from "@/components/templates/ContentTemplate.vue";
import BackButton from "@/components/components/BackButton.vue";
import {computed, ref} from "vue";
import {
  clearCart,
  deleteOneProduct,
  getCartProducts,
  getProductCounts,
  addOneProduct,
  getAllSummaries, deleteProductFromCart
} from "@/services/data/cart.js";

const productsList = ref([])
const productsComputed = computed(() => productsList.value = getCartProducts())

const productCounts = ref([])
const countByProduct = computed(() => productCounts.value = getProductCounts())

const totals = ref({
  priceSum: 0,
  productsCount: 0
})
const totalCounts = computed(() => totals.value = getAllSummaries())

function clear() {
  clearCart();
}

function findCountByProductId(id: number) {
  return countByProduct.value.find((el) => el.id == id).count;
}

const addition = (id: number, price: number) => addOneProduct(id, price)
const substraction = (id: number, price: number) => deleteOneProduct(id, price)

const del = (id: number, price: number, count: number) => deleteProductFromCart(id, price, count)
</script>

<template>
  <page-template>
    <template #header>
      <h2>Корзина</h2>
    </template>

    <template #main>
      <content-template>
        <template #left-content>
          <div class="mb-4">
            <p>ИТОГО:<sup>{{totalCounts.productsCount}}</sup></p>
            <h2>{{(totalCounts.priceSum).toFixed(2)}} $</h2>
          </div>

          <div class="mb-4">
            <v-btn density="comfortable"
                   color="orange-darken-1"
                   @click="this.$router.push('/checkout')">Заказать
            </v-btn>
          </div>

          <div class="mb-4">
            <v-btn density="comfortable"
                   color="red-accent-3"
                   @click="clear">Очистить
            </v-btn>
          </div>
          <back-button></back-button>
        </template>

        <template #central-content>

          <v-container>
            <v-container v-for="product in productsComputed"
                         id="cartProduct"
                         class="d-flex">
              <v-col id="image">
                <v-img
                    :src="product.image"
                    alt="Битая ссылка. Введите другое значение"
                    cover
                >
                </v-img>
              </v-col>

              <v-col id="info" class="flex-column">
                <p>{{ product.title }}</p>

                <br>
                <v-divider></v-divider>

                <v-container class="d-flex justify-space-between">
                  <v-btn @click="addition(product.id, product.price)" color="green" size="x-small"
                  >
                    <v-icon icon="mdi-plus" color="white"></v-icon>
                  </v-btn>

                  {{ findCountByProductId(product.id) }}

                  <v-btn @click="substraction(product.id, product.price)"
                         :disabled="findCountByProductId(product.id) === 1"
                         :color="findCountByProductId(product.id) === 1 ? 'grey' : 'red'" size="x-small">
                    <v-icon icon="mdi-minus"
                            :color="(findCountByProductId(product.id) === 1) ? 'grey' : 'white'"></v-icon>
                  </v-btn>

                  <v-btn @click="del(product.id, product.price, findCountByProductId(product.id))" size="x-small">
                    <v-icon icon="mdi-trash-can-outline" color="grey-darken-3"></v-icon>
                  </v-btn>
                </v-container>
              </v-col>

              <v-col id="price">
                <h6 class="price_for_one">{{ product.price }}$</h6>
                <h5>{{ (findCountByProductId(product.id) * product.price).toFixed(2) }} $</h5>
              </v-col>

            </v-container>

          </v-container>

        </template>
      </content-template>
    </template>
  </page-template>
</template>
<style scoped>
#cartProduct {
  border-bottom: 1px solid grey;
  max-height: 40vh;

  #info {
    flex-grow: 2;
  }

  #price {
    .price_for_one {
      color: grey;
    }
  }
}
</style>