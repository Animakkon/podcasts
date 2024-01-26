<script setup lang="ts">
  import { reactive } from "vue";
  import {ICredentialsInfo, login} from "@/services/auth.ts"

  const rules = {
    required: value => !!value || 'Field is required'
  }

  const formValues = reactive({
    user: '',
    password: ''
      }
  )

  function sendMethod() {
    const creds: ICredentialsInfo = {
      user: formValues.user,
      password: formValues.password
    }
    login(creds )
  }

</script>

<template>
  <v-container fluid>
    <v-row align="center">
      <v-card class="mx-auto pa-12 pb-8"
              :title="'Authentifications'"
      >
        <v-card-title>
          <v-divider></v-divider>
        </v-card-title>

        <v-form ref="user">

          <div class="text-subtitle-1 text-medium-emphasis">Account</div>
          <v-text-field
              v-model="formValues.user"
              :rules="[rules.required]"
              variant="outlined"
              label="Name"
              placeholder="Name or e-mail address"
              clearable
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis">Password</div>
          <v-text-field
              v-model="formValues.password"
              :rules="[rules.required]"
              variant="outlined"
              label="Password"
              placeholder="Password input"
              clearable
          >

          </v-text-field>

          <v-btn @click="sendMethod"
                 variant="elevated"
                 color="primary"
                 class="wtf"
          >Log in</v-btn>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
  v-text-field {
    margin-bottom: 12px;
  }

  .wtf {
    font-weight: bold;
  }

</style>
