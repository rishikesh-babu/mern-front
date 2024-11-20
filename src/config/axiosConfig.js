// import axios from "axios";

// export const AxiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_API_BASE_URL
// })

// AxiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token')
//     config.headers.Authorization = 'Bearer' + " " + token
//     return config
// })

// AxiosInstance.interceptors.response.use((response) => {
//     if (response.data) {
//         console.log(response)
//     }
//     return response
// },
//     (err) => {
//         // debugger
//         if (
//             err.status === 401 &&
//             err.response.data.message === "unauthorized user"
//         ) {
//             // if (err.this.status === 401 && err.response.message === "Request failed with status code 404") {
//             localStorage.clear()
//             window.location.href = "/login"
//         } else if (err.status === 404) {
//             window.location.href = "/notfound"
//         }

//         return Promise.reject(err)
//     })

// Updated

// import axios from "axios";

// export const AxiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_API_BASE_URL,
// });

// // Request Interceptor
// AxiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// // Response Interceptor
// AxiosInstance.interceptors.response.use(
//     (response) => {
//         if (response.data) {
//             console.log(response);
//         }
//         return response;
//     },
//     (err) => {
//         const status = err.response ? err.response.status : null;
//         const message = err.response && err.response.data ? err.response.data.message : null;

//         if (status === 401) {
//             localStorage.clear();
//             window.location.href = "/login";
//         } else if (status === 404) {
//             window.location.href = "/notfound";
//         }

//         return Promise.reject(err);
//     }
// );

// -----------------------------------------------------------------------------------------------------
import axios from "axios";


export const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    console.log("Token: ", token)
    config.headers.Authorization = 'Bearer' + " " + token
    return config
})

// AxiosInstance.interceptors.response.use((response) => {
//     console.log("This is axiox interseptor: ", response.data)
//     if (response.data) {
//         console.log(response)
//     }
//     return response
// })

AxiosInstance.interceptors.response.use(
    (response) => {
        if (response.data) {
            console.log(response.data)
        }
        return response
    },
    (err) => {
        if (err.status === 401) {
            localStorage.removeItem('token')
            window.location.href = '/login'
        } else if (err.status === 404) {
            window.location.href = '/notfound'
        }
    })