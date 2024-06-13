import {defineStore} from "pinia";
import {reactive, ref, watch} from "vue";
import {ICredentialsInfo} from "@/services/auth.js";
import {usePersonalInfoStore} from "./personalInfoStore.ts";

export const useUserAuthStore = defineStore('userAuth',
    () => {
        const authorisation = ref(false)
        const credentials: ICredentialsInfo = reactive({
            user: '',
            password: ''
        })

        const getIsAuthorized = () => {
            return authorisation.value
        }

        const setIsAuthorized = (value: boolean) => {
            authorisation.value = value
        }

        const setUserCredentialsAndAuthStatus = (creds: ICredentialsInfo, authStatus: boolean) => {
            credentials.user = creds.user
            credentials.password = creds.password

            setIsAuthorized(authStatus)
        }

        function _personalInfoStore() {
            return usePersonalInfoStore();
        }

        watch( (credentials), () => {
           _personalInfoStore().buildPersonalInfo(credentials.user)
        })

        return {
            authorisation,
            getIsAuthorized,
            setUserCredentialsAndAuthStatus
        }
    },
    {
        persist: true
    }
)
