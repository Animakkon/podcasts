import { post } from '../services/httpAxiosRequests.ts'

export default function checkout(value: any) {
    const url = 'post'
    const body = JSON.stringify(value)

    return post(url, body, {})
}