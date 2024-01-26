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

    return await get(url, headers, 'auth _ login request').then(function (response) {
        const result: IAuthResponce = response as IAuthResponce;
        if (result.authenticated) {
            localStorage.setItem('user', JSON.stringify(result));
        }
        return result;
    });
}

export function logout() {
    localStorage.removeItem('user');
}

export function isAuthorized() {
    const userData = localStorage.getItem('user');

    if (userData) {
        return JSON.parse(userData).authenticated;
    } else {
        return false;
    }
}
