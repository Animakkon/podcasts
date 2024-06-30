import {ICredentialsInfo, toLogIn, toLogOut} from "../../api/AAuth.ts";
import {useUserAuthStore} from "../../store-pinia/userAuthStore.ts";

function _authStore() {
    return useUserAuthStore()
}

export async function login(credentials: ICredentialsInfo) {
    return toLogIn(credentials).then((response: boolean) => {
        if (response) {
            _authStore().setUserCredentialsAndAuthStatus(credentials, response)
        }
        return response
    })
}

export function logout() {
    return toLogOut().then((response) => {
        if (response) {
            const credentials: ICredentialsInfo = {
                user: '',
                password: ''
            };

            _authStore().setUserCredentialsAndAuthStatus(credentials, false)
        }
    })
}

export function isAuthorized() {
    return _authStore().getIsAuthorized()
}
