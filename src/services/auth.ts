import { get } from "./httpAxiosRequests.ts"


export interface ICredentialsInfo {
    user: string,
    password: string
}

interface IAuthResponce {
    authenticated: boolean,
    user: string
}

export async function login(credentials: ICredentialsInfo) {
    const btoaString = btoa(`${credentials.user}:${credentials.password}`);
    const url = `basic-auth/${credentials.user}/${credentials.password}`
    const headers = {
        authorization: `basic ${btoaString}`
    }

    return await get(url, headers).then(function (response) {
        const result: IAuthResponce = response as IAuthResponce;
        if (result.authenticated) {
            localStorage.setItem('user', JSON.stringify(result));
        }
        return result.authenticated;
    });
}

export function logout() {
    localStorage.removeItem('user');
}

export function isAuthorized() {
    const userData = localStorage.getItem('user');

    if (userData) {
        const auth = JSON.parse(userData).authenticated;
        return auth
    } else {
        return false;
    }
}
