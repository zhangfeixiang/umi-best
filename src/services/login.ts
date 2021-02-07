import request from "@/utils/request";
interface LoginParamsType {
    name: string;
    password: string
}
export async function login(params: LoginParamsType): Promise<any> {
    return request('/api/login', {
        method: 'post',
        data: params
    })
}
export {
    LoginParamsType
}