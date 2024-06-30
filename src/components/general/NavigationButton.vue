<script setup lang="ts">
import menuItems from '@/router/menuItems.js'
import IBtn from "@/components/components/ui/IconButton.vue";

const menu = menuItems;

</script>

<template>
  <IBtn :color="'primary_darken_1'"
        :icon="'mdi-menu'"
        id="navigation_menu_btn"
  ></IBtn>
  <v-menu activator="#navigation_menu_btn">
    <v-list>
      <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          :value="index">
        <v-list-item-title
            @click="$router.push(item.link)">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>

</template>