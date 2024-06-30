<script setup lang="ts">
import Actions from '@/components/general/HeaderActions.vue'
import NavBtn from '@/components/general/NavigationButton.vue'

import logoImage from '@assets/images/logo.png'
</script>

<template>
  <div>
    <header class="d-flex header sticky">
      <div class="d-flex header__left-side">
        <div class="logo" @click="$router.push('/shop')">
          <v-img :src="logoImage" :width="'100px'" :height="'100%'" class="mr-5"></v-img>
        </div>

        <NavBtn/>
      </div>

      <div class="d-flex header__right-side">

        <div id="page_header_content">
          <slot name="header"></slot>
        </div>

        <Actions/>
      </div>

    </header>

    <div class="main_article">
      <slot name="main"></slot>
    </div>
  </div>

</template>

<style>
@import "../../../public/theme/palette.css";

header, article {
  padding: 0px 72px;
}

.logo, #page_header_content {
  mar-right: 20px;
}

.logo:hover {
  cursor: pointer;
}

.header {
  background-color: var(--on-surface-variant);
  justify-content: space-between;
}

.header__right-side {
  flex: 0 2 560px;

  #page_header_content {
    flex: 0 2 512px
  }
}

.main_article {
  margin-top: 60px;
}

.sticky {
  position: fixed;
  width: 100%;
  z-index: 9;
  top: 0;
}
</style>
