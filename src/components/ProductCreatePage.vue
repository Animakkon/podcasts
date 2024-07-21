<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useForm, useField} from "vee-validate";
import { useRouter } from 'vue-router'
import {createProduct, getAllCategories} from '@/services/data/product'

import PageTemplate from "@/components/templates/PageTemplate.vue";
import ContentTemplate from "@/components/templates/ContentTemplate.vue";
import Loader from "@/components/general/Loader.vue";

const categories = ref([])

onMounted(() => {
  inProcess.value = true
  getAllCategories().then((result) => {
    categories.value = result
    inProcess.value = false
  })
})

const isLoading = ref(false)
const inProcess = computed({
  get() {
    return isLoading.value
  },
  set(value) {
    isLoading.value = value
  }
})


const {handleSubmit} = useForm({
  validationSchema: {
    titleProduct(value) {
      if (!value) return 'Value is required!'
      return true
    },
    price(value) {
      if (!value || value <= 0) return 'Value is required and must be POSITIVE!'
      return true
    },
    category(value) {
      if (!value) return 'Value is required!'
      return true
    },
    image(value) {
      const regex = new RegExp(/^((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w\.-]+)(?::(\d+))?)?([\/\\\w\.()-]*)?(?:([?][^#]*)?(#.*)?)*/gmi)
      const test = regex.test(value)

      if (value && test) return true
      return 'LINK is required!'
    }
  },
  initialValues: {
    image: src
  }
})


const titleProduct = useField('titleProduct')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const image = useField('image')

const router = useRouter()

const submit = handleSubmit((values) => {
  inProcess.value = true

  const body = JSON.stringify(values)

  createProduct(body).then(res => {
    if (res) {
      setTimeout(() => {
        alert('УСПЕХ: товар создан')
        router.push('shop')
      }, 2000)
    }
  })
})

const src = "https://media.istockphoto.com/id/947171010/id/foto/anjing-pembroke-korgy-welsh.jpg?s=612x612&w=0&k=20&c=sHbLuUl86UWCu_d3qlnk4Y5obpw1rlJS-iNQnIhlEDE="

</script>

<template>
  <page-template>
    <template #main>
      <content-template>
        <template #central-content>
          <Loader v-if="isLoading"></Loader>

          <v-container v-if="!isLoading">
            <form @submit.prevent="submit">
              <v-container>
                <v-column cols="10" id="imagePreview">
                  <v-container style="height: 40vh" class="align-center">
<!--                    lazy-src="https://picsum.photos/id/11/100/60"-->
                    <v-img
                           :src="image.value.value"
                           alt="Битая ссылка. Введите другое значение"
                    >
                    </v-img>
                  </v-container>

                  <v-text-field label="Image src"
                                v-model="image.value.value"
                                :error-messages="image.errorMessage.value"
                                clearable>
                  </v-text-field>
                </v-column>

                <v-column cols="10">
                  <v-text-field v-model="titleProduct.value.value"
                                label="Title"
                                :error-messages="titleProduct.errorMessage.value"
                                type="text"></v-text-field>

                  <v-combobox label="category"
                              v-model="category.value.value"
                              :error-messages="category.errorMessage.value"
                              :items="categories"
                              clearable></v-combobox>

                  <v-text-field label="Price"
                                v-model="price.value.value"
                                :error-messages="price.errorMessage.value"
                                clearable
                                type="number"></v-text-field>

                  <v-textarea label="Description"
                              v-model="description.value.value"
                  ></v-textarea>

                </v-column>

                <div class="d-flex justify-space-between">

                  <v-btn class="text-none text-black mb-4"
                         color="orange-darken-1"
                         size="x-large"
                         variant="flat"
                         type="submit">Create
                  </v-btn>
                  <v-btn @click="$router.go(-1)"
                      class="text-none text-black mb-4"
                         color="blue-grey-darken-3"
                         size="x-large"
                         variant="flat">Cancel
                  </v-btn>
                </div>


              </v-container>


            </form>
          </v-container>
        </template>
      </content-template>
    </template>
  </page-template>

</template>

<style scoped>
.v-btn {
  flex: 1 1 10%;
  max-width: 40%;
}
</style>