import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://zangg-backend.herokuapp.com' //base API
})

export default instance

//http://localhost:5001/zangg-group08/us-central1/api
//http://localhost:4000
//https://zangg-backend.herokuapp.com