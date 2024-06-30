import { get } from "../services/httpAxiosRequests.ts"

export interface ICredentialsInfo {
    user: string,
    password: string
}

interface IAuthResponce {
    authenticated: boolean,
    user: string
}

export async function toLogIn(credentials: ICredentialsInfo) {
    const btoaString = btoa(`${credentials.user}:${credentials.password}`);
    const url = `basic-auth/${credentials.user}/${credentials.password}`
    const headers = {
        authorization: `basic ${btoaString}`
    }

    return await get(url, headers).then(function (response) {
        const result: IAuthResponce = response as IAuthResponce;
        return result.authenticated;
    });
}

export async function toLogOut() {
   return true;
}
