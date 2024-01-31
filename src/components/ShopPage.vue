<script setup lang="ts">
import {useRoute} from 'vue-router'
import PageTemplate from "@/components/templates/PageTemplate.vue"
import Content from "@/components/ShopPageContent.vue"


import {ref} from 'vue'

const route = useRoute()
const pageTitle = ref(route.name)

const searchValue = ref('');
const childProp = ref('')

function submit(value?: string) {
  if (value) {
    childProp.value = searchValue.value
  }
}
function reset() {
  childProp.value = ''
  searchValue.value = ''
}
</script>

<template>
  <page-template>
    <template #header>
      <v-text-field v-model="searchValue"
                    :hint="'Press ENTER to Submit'"
                    @keydown.enter.prevent="submit"
                    type="text"
                    label="Поиск"
                    prepend-inner-icon="mdi-magnify"
                    variant="underlined"
      ></v-text-field>
      <v-btn @click="reset"
             :disabled="!searchValue.length"
             size="small"
             icon="mdi-close-circle-outline"
             tooltip="Reset"
             color="brown-darken-1"></v-btn>
    </template>

    <template #main>
      <Content :parentFilter="childProp"></Content>
    </template>
  </page-template>
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