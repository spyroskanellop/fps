import axios from 'axios'
import initializeMockAdapter from '../mock/mockAdapter'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVICE_URL,
    timeout: 5000,
})

apiClient.interceptors.request.use(
    config => {
        if (config.url === '/auth/login') {
            return config
        }
        console.log(config);
        const auth = JSON.parse(localStorage.getItem('auth'))

        if (auth?.token) {
            config.headers.Authorization = `Bearer ${auth.token}`
        }

        return config
    },
    error => Promise.reject(error)
)

// Response Interceptor with centralized management of response codes
apiClient.interceptors.response.use(
  response => {
    // Successful responses can be handled globally if needed
    return response;
  },
  error => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 400:
          console.error('Bad Request: ', error.response.data.message);
          // Handle 400-specific logic
          alert('Bad request. Please check the data and try again.');
          break;

        case 401:
          // Handle 401-specific logic (e.g., redirect to login)
          console.error('Unauthorized: ', error.response.data.message);
          // localStorage.removeItem('auth');
          // window.location.href = '/login';
          break;

        case 403:
          console.error('Forbidden: ', error.response.data.message);
          // Handle 403-specific logic (e.g., show a "no access" message)
          alert('You do not have permission to access this resource.');
          break;

        case 404:
          console.error('Not Found: ', error.response.data);
          // Handle 404-specific logic (e.g., redirect to a not found page)
          // alert('Resource not found.');
          break;

        case 500:
          console.error('Server Error: ', error.response.data.message);
          // Handle 500-specific logic (e.g., show generic error message)
          alert('Internal server error. Please try again later.');
          break;

        default:
          console.error(`Unhandled Error (status: ${status}):`, error.response.data.message);
          // Handle other response codes as needed
          alert(`Error ${status}: ${error.response.data.message}`);
      }
    } else {
      console.error('Network Error:', error.message);
      alert('Network error. Please check your internet connection.');
    }

    return Promise.reject(error);
  }
);

if(import.meta.env.NODE_ENV !== "production"){
  initializeMockAdapter(apiClient);
}
  
export default apiClient;