<script setup lang="ts">
import menuItems from '@/router/menuItems.js'
const menu = menuItems;

</script>

<template>
    <div id="navigation">
      <v-btn variant="tonal">
        <v-icon icon="mdi-menu" color="grey-darken-3"></v-icon>
        <v-menu activator="parent">
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
      </v-btn>
    </div>

    <div id="user-actions">
      <v-btn @click="$router.push('/cart')"
             variant="text" >
        <v-icon icon="mdi-cart-variant"
                color="grey-darken-3"
        ></v-icon>
      </v-btn>
      <v-btn  variant="text" :disabled="true">
        <v-icon icon="mdi-account-check" color="grey-darken-3"></v-icon>
      </v-btn>
      <v-btn  variant="text" :disabled="true">
        <v-icon icon="mdi-logout" color="grey-darken-3"></v-icon>
      </v-btn>
    </div>
</template>

<style scoped>
#navigation {
  position: absolute;
  left: 0.5rem;
}

#user-actions {
  position: absolute;
  right: 0.5rem;

  .v-btn {
    margin-right: 0.1rem;
  }
}

</style>