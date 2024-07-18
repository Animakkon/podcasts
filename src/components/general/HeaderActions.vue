<script lang="ts" setup>
import IBtn from "@/components/components/ui/IconButton.vue";

import {computed, onMounted, ref} from "vue";
import {isAuthorized, logout} from "@/services/data/auth.js";
import {getCartProducts, getCartTotalsCounts} from "@/services/data/cart.js";

import EWDialog from "@/components/components/EWDialog.vue";

const isShowLogout = computed(() => isAuthorized())

let cartCounts = ref(0)

onMounted(() => {
  cartCounts = getCartTotalsCounts()
})

const checkCart = computed(() => getCartProducts().length > 0)
const buildCartVariant = computed(() => {
  return checkCart.value ? 'tonal' : 'text';
})

function toLogOut() {
  logout()
}

</script>

<template>
  <div class="d-flex ml-10">
    <IBtn :color="'primary_darken_1'"
          :icon="'mdi-cart-variant'"
          :text="'Корзина'"
          :variant="buildCartVariant"
          @click="$router.push('/cart')"
    ></IBtn>

    <div v-show="isShowLogout">
      <EWDialog></EWDialog>
    </div>

    <IBtn v-show="isShowLogout"
          :color="'primary_darken_1'"
          :icon="'mdi-logout'"
          :text="'Выход'"
          @click="toLogOut"
    ></IBtn>

    <IBtn v-show="!isShowLogout"
          :color="'primary_darken_1'"
          :icon="'mdi-login'"
          :text="'Вход'"
          @click="$router.push('/login')"
    ></IBtn>

  </div>

</template>

<style scoped>
</style>