<script setup lang="ts">
import {computed, watch} from "vue";

const configuration = defineProps([
    'color',
    'text',
    'icon',
    'variant'
])

const click = defineEmits(['click']);

const btnColor = computed(() =>
  configuration.color && configuration.color.length ? configuration.color : 'primary_darken_1'
)
const btnText = computed(() => configuration.text ? configuration.text : '')
const btnIcon = computed(() => configuration.icon ? configuration.icon : '')
const btnVariant = computed(() => configuration.variant ? configuration.variant : 'text')

</script>

<template>
  <v-btn v-if="btnText"
         :color="btnColor"
         :prepend-icon="btnIcon"
         :variant="btnVariant"
         :text="btnText"
         @click="$emit('click')"
         width="70px"
         size="x-small"
         stacked
  ></v-btn>
  <v-btn v-else
         :color="btnColor"
         :prepend-icon="btnIcon"
         :variant="btnVariant"
         @click="$emit('click')"
         width="70px"
         size="x-small"
         stacked
  ></v-btn>
</template>

<style scoped>
.v-btn-content {
  color: v-bind(btnColor)
}
</style>