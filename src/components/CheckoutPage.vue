<script setup lang="ts">
import PageTemplate from "@/components/templates/PageTemplate.vue";
import ContentTemplate from "@/components/templates/ContentTemplate.vue";

import {vMaska} from "maska";

import {useField, useForm} from "vee-validate";
import { checkout } from "@/services/cart.ts";

function back() {
  window.history.back()
}

const {handleSubmit} = useForm({
  validationSchema: {
    firstName (value) {
      if (!value) return 'IS REQUIRED'
      return true
    },
    secondName (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    lastName (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    birthdayDate (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    addressLocal (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    cardNumber (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    cardTerm (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    cardCVV (value) {
      if (!value) return 'IS REQUARED'
      return true
    },
    agreement (value) {
      if (value === '1') return true
      return 'AGREEMENT NEED'
    }
  }

})

const firstName = useField('firstName')
const secondName = useField('secondName')
const lastName = useField('lastName')
const birthdayDate = useField('birthdayDate')
const addressLocal = useField('addressLocal')
const cardNumber = useField('cardNumber')
const cardTerm = useField('cardTerm')
const cardCVV = useField('cardCVV')
const agreement = useField('agreement')

const mask = {
  cardNumber: {mask: '#### #### #### ####'},
  cardTerm: {mask: '##/##'},
  cardCVV: {mask: '###'}
}


const submit = handleSubmit((values) => {

  checkout(values).then(result => res => {
    if (res) {
      setTimeout(() => {
        alert('УСПЕХ: Заказ отправлен')
        router.push('shop')
      }, 2000)
    }
  })
})
</script>

<template>
  <page-template>

    <template #main>
      <content-template>
        <template #central-content>
          <v-container>
            <form @submit.prevent="submit">
              <div id="Info">
                <h3>User Info</h3>
                <div class="d-flex">
                  <v-text-field v-model="firstName.value.value"
                                :error-messages="firstName.errorMessage.value"
                                label="Имя"></v-text-field>
                  <v-text-field v-model="secondName.value.value" :error-messages="secondName.errorMessage.value"
                                label="Фамилия"></v-text-field>
                </div>
                  <v-text-field v-model="lastName.value.value" :error-messages="lastName.errorMessage.value"
                                label="Отчество"></v-text-field>
                  <v-text-field v-model="birthdayDate.value.value" :error-messages="birthdayDate.errorMessage.value"
                                label="Дата рождения" type="date"></v-text-field>
              </div>

              <div id="Address">
                <h3>User Address</h3>
                <v-text-field v-model="addressLocal.value.value" :error-messages="addressLocal.errorMessage.value"
                              label="Адрес"></v-text-field>
              </div>

              <div id="Card">
                <h3>User Card</h3>
                <v-text-field v-model="cardNumber.value.value" :error-messages="cardNumber.errorMessage.value"
                              v-maska:[mask.cardNumber] label="Номер карты"></v-text-field>
                <div class="d-flex">
                  <v-text-field v-model="cardTerm.value.value"
                                :error-messages="cardTerm.errorMessage.value"
                                v-maska:[mask.cardTerm]
                                label="Дата действия"></v-text-field>
                  <v-text-field v-model="cardCVV.value.value"
                                :error-messages="cardCVV.errorMessage.value"
                                v-maska:[mask.cardCVV]
                                label="CVV/CVC"></v-text-field>
                </div>
              </div>

              <v-checkbox v-model="agreement.value.value"
                          :error-messages="agreement.errorMessage.value"
                          value="1"
                          label="Согласие на ообработку персональных данных"></v-checkbox>


              <div class="d-flex justify-space-between mt-6">
                <v-btn class="text-none text-black mb-4"
                       color="orange-darken-1"
                       size="x-large"
                       variant="flat"
                       type="submit"
                >Оформить заказ
                </v-btn>
                <v-btn @click="back"
                       class="text-none text-black mb-4"
                       color="blue-grey-darken-3"
                       size="x-large"
                       variant="flat">Обратно
                </v-btn>
              </div>
            </form>

          </v-container>

        </template>
      </content-template>
    </template>

  </page-template>
</template>

<style>
h3 {
  color: #B0BEC5;
}
</style>