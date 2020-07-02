import Axios from "axios"
const BACKEND_URL = process.env.REACT_APP_BACKEND;

const getApi = async ({
  method = 'get',
  data = {},
  params = {},
  url = ""
} = {}) => {
   return await Axios({
     method,
     data,
     url: `${BACKEND_URL}/api${url}`,
     params,
     
   },{withCredentials: true})
   .then(res => {
     if (res) {
       return res.data
     } else {
       return Promise.reject(res.data)
     }
   }).catch(err => err.response.data)
 }
 
 export default getApi
 