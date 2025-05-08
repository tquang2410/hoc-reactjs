import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
// Add a request interceptor
instance.interceptors.response.use(function (response) {
    console.log('>>> interceptor', response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(">>> run error: ", error.response);
    return error && error.response && error.response.data ?
        error.response.data
        : Promise.reject(error);
});

export default instance;