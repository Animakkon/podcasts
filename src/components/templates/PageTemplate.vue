<script setup lang="ts">
import Actions from '@/components/general/HeaderActions.vue'
import NavBtn from '@/components/general/NavigationButton.vue'
</script>

<template>
  <header class="d-flex header sticky">
    <NavBtn/>

    <div id="page_header_content">
      <slot name="header"></slot>
    </div>

    <Actions/>
  </header>

  <article class="main_article">
    <slot name="main"></slot>
  </article>

</template>

<style>
@import "../../../public/theme/palette.css";

header, article {
  padding: 0px 72px;
}

.header {
  background-color: var(--on-surface-variant);
  justify-content: space-between;

  #page_header_content {
    flex: 1 2 512px
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
