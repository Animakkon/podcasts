import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {ICredentialsInfo} from "@/services/auth.js";

export const userAuthStore = defineStore('userAuth',
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

        const getUserLogin = () => {
            return credentials.login
        }

        const setUserCredentialsAndAuthStatus = (credentials: ICredentialsInfo, authStatus: boolean) => {
            credentials.login = credentials.user
            credentials.password = credentials.password

            setIsAuthorized(authStatus)
        }

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
