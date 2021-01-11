import axios from 'axios';

let url = 'http://localhost:3333'

if(process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3333'
}

if(process.env.NODE_ENV === 'production') {
  url = 'https://be-the-hero-api-lucas.herokuapp.com/'
}

const api = axios.create({
    baseURL: url
})

export default api;
