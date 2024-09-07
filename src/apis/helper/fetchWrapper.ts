import { requestOptionsType } from "@/types";
import { vehicleServices } from "../vehicle.service";

const request = (method: string) => {
    return (url: string, body: File | FileList | Object) => {
        const requestOptions: requestOptionsType = {
            method,
            headers: {},
            // headers: authHeader(url)
        }
        // if()
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body)
        }
        return fetch(url, requestOptions).then(handleResponse).catch(err => console.log(err))
    }
}

// function authHeader(url) {
//     // return auth header with jwt if user is logged in and request is to the api url
//     const user = userService.userValue;
//     const isLoggedIn = user?.token;
//     const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
//     if (isLoggedIn && isApiUrl) {
//         return { Authorization: `Bearer ${user.token}` };
//     } else {
//         return {};
//     }
// }

const handleResponse = async (response: any) => {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    // check for error response
    if (!response.ok) {
        if ([401, 403].includes(response.status) && vehicleServices.userValue()) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            // userService.logout();
        }

        // get error message from body or default to response status
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    _delete: request('DELETE'),
}