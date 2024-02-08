<script setup lang="ts">
import PageTemplate from '@/components/templates/PageTemplate.vue'
import ContentTemplate from "@/components/templates/ContentTemplate.vue";

</script>

<template>
  <page-template>
    <template #header>
      <h2>Корзина</h2>
    </template>

    <template #main>
      <content-template>
        <template #left-content>
          <v-btn density="comfortable"
                 color="orange-darken-1"
                 @click="this.$router.push('/checkout')">Заказать</v-btn>
        </template>

        <template #central-content>
          <div>
            <h3> Vuex для оформления заказа</h3>
            <p>Для выхода на форму оформления заказа нажмите "Оформить заказ"</p>
          </div>
        </template>
      </content-template>
    </template>
  </page-template>
</template>
<style scoped>

</style>