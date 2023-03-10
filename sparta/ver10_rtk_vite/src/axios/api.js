import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

instance.interceptors.request.use(
    function(config){
        console.log("인터셉터 요청 성공!");
        return config;
    },
    function(error){
        console.log("인터셉터 요청 오류!");
        return Promise.reject(error);
    },
)

instance.interceptors.response.use(
    function(response){
        console.log("리스폰스 요청 성공!");
        return response;
    },

    function(error){
        console.log("리스폰스 요청 오류!");
        return Promise.reject(error);
    },
)

export default instance;