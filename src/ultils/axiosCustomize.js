import axios from "axios";
import NProgress from "nprogress";

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
    // minimum: 0.1,
    // easing: 'ease',
    // speed: 500,
    // parent: 'body',
    // template: '<div class="bar" role="bar"><div class="peg"></div></div>'
})
const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});
instance.interceptors.request.use(function (config) {
    NProgress.start();
    // Do something before request is sent
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