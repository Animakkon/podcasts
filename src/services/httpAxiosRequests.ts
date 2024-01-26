import axios from "axios";

const BASE_URL = "https://httpbin.org"

export async function get(url: string, headers?: {[k: string]: any}, place?: string) {
    return axios.get( `${BASE_URL}/${url}`, {
        headers: headers
    })
        .then(response => response.data )
        .catch(() => console.log('$Get ERROR$: ', place));
}