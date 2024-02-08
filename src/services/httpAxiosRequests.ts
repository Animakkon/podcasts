import axios from "axios";

const BASE_URL = "https://httpbin.org"

export async function get(url: string, headers?: {[k: string]: any}, base?: string, place?: string) {
    const str = base ? base : BASE_URL

    return axios.get( `${str}/${url}`, {
        headers: headers
    })
        .then(response => response.data )
        .catch(() => console.log('$Get ERROR$: ', place));
}

export async function post(url: string, body: string, headers?: {[k: string]: any}, base?: string, place?: string) {
    const str = base ? base : BASE_URL

    return axios.post( `${str}/${url}`, {
        headers: headers
    })
        .then(response => {
          return   response.status === 200
        } )
        .catch(() => console.log('$Get ERROR$: ', place));
}

