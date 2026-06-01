import axios from 'axios'
import initializeMockAdapter from './mock/mockAdapter'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVICE_URL,
    timeout: 3000,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // }
})

// const instance = axios.create({
//     baseURL: import.meta.env.VITE_APP_SERVICE_URL,
//     timeout: 3000,

// })


// instance.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem("token");
//         if(token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config
//     },
//     error => {
//         console.log(error);
//         return Promise.reject(error)
//     }
// )

// Initialize the mock adapter using the instance from created axios
// if(import.meta.env.NODE_ENV !== "production"){
//   initializeMockAdapter(instance);
// }


export default instance;