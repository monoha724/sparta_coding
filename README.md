# sparta_coding

vite를 쓸 경우 env와 api 설정 / 

.env
VITE_SERVER_URL=http://localhost:4000

api.js
const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})
