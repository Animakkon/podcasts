<script setup lang="ts">
import { ref } from 'vue'
  function submit(res) {
    alert(res)
    console.log(res)
  }

  const searchValue = ref('');


import {useRoute} from 'vue-router'
import Additional from "@/components/PageTemplate.vue";

const route = useRoute()
const pageTitle = ref(route.name)
</script>

<template>
  <additional>
    <template #header>
      <v-container class="d-flex justify-center">
        <v-col justify="center"
               cols="6">
          <v-text-field @keydown.enter.prevent="submit(searchValue)"
                        v-model="searchValue"
                        type="text"
                        label="Поиск"
                        placeholder="Введите наименование или цену товара"
                        prepend-inner-icon="mdi-magnify"
                        variant="underlined"
                        clearable
          ></v-text-field>
        </v-col>
      </v-container>
    </template>
  </additional>
<!--    <main-page-header></main-page-header>-->


  <!--    <v-navigation-drawer>-->
  <!--      <v-list>-->
  <!--        <v-list-item title="Navigation drawer"></v-list-item>-->
  <!--      </v-list>-->
  <!--    </v-navigation-drawer>-->

<!--  <main class="line" style="min-height: 300px;">-->
<!--    <router-view></router-view>-->
<!--  </main>-->


  <!--<header>-->


  <!--  <main-page-header-extra></main-page-header-extra>-->
  <!--</header>-->
  <!--   <v-main>-->
  <!--        <router-view></router-view>-->
  <!--    </v-main>-->


</template>

<style scoped>

.line:before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background: lightgray;
  margin-bottom: 20px;
}

</style>