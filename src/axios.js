import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://zangg-backend.herokuapp.com' //base API
})

export default instance