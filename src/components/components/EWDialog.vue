<script setup lang="ts">

import {onMounted, computed, ref} from "vue";
import {getCurrentPersonInfo} from "@/services/data/personInfo.ts";

let info = ref({})

onMounted(() => {
  info = getCurrentPersonInfo()
})

const imgLink = computed( () => info.image || '' )
const userFIO = computed( () => `${info.surname} ${info.name} ${info.lastName} `  )
const userBirth = computed( () => info.dateBirth )


</script>

<template>
  <v-dialog max-width="700">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps"
             :prepend-icon="'mdi-account-check'"
             color="primary_darken_1"
             variant="text"
             text="Инфо"
             width="70px"
             size="x-small"
             stacked
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Информация пользователя">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="5">
                <div class="greenDiv d-flex">
                  <v-avatar v-if="imgLink.length === 0" color="info"
                            size="x-large">
                    <v-icon icon="mdi-account-circle"></v-icon>
                  </v-avatar>
                  <v-avatar color="info"
                            size="x-large">
                    <v-img :src="imgLink"
                           alt="avatar"
                    ></v-img>
                  </v-avatar>

                  <p class="font-weight-light">
                    {{ userFIO }}
                  </p>

                  <p class="font-weight-thin text-disabled">
                    {{ userBirth }}
                  </p>
                </div>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="6">
                <div>
                  <p v-for="item in Object.keys(info)"
                      class="font-weight-thin text-disabled">
                    {{ info[item] }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Закрыть"
              @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.greenDiv {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
