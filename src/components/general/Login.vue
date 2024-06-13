<script setup lang="ts">
import { ref } from "vue"
import {useField, useForm} from "vee-validate";
import {ICredentialsInfo, login} from "@/services/data/auth.js";
import { useRouter } from 'vue-router'

const {handleSubmit} = useForm({
  validationSchema: {
    user (value) {
      if (!value) return 'Name needs'
      return true
    },
    password (value) {
      if (!value) return 'Password needs'
      return true
    },

  }
})

const user = useField('user')
const password = useField('password')

const inProcess = ref(false)
const router = useRouter();

const submit = handleSubmit(() => {
  inProcess.value = true

  const creds: ICredentialsInfo = {
    user: user.value.value,
    password: password.value.value
  }
  login(creds).then((result: boolean) => {
    if (result) {
      router.push({name: 'CreateProduct'})
    }
  });

})
</script>

<template>
  <v-container div class="d-flex justify-start mb-6 fill-height">
    <v-sheet class="mx-auto pa-12 pb-8">

      <h2>Authentifications</h2>
      <v-divider></v-divider>
      <br>

      <form @submit.prevent="submit" :disabled="inProcess">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        <v-text-field
            v-model="user.value.value"
            :error-messages="user.errorMessage.value"
            variant="outlined"
            placeholder="User name"
            clearable
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">Password</div>
        <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            variant="outlined"
            placeholder="Password input"
            clearable
            block
        >

        </v-text-field>

        <v-btn
            block
            type="submit"
            class="text-none text-black mb-4"
            color="blue-grey-darken-3"
            size="x-large"
            variant="flat"
        >Log in
        </v-btn>
      </form>
    </v-sheet>
  </v-container>


</template>

<style>
</style>
