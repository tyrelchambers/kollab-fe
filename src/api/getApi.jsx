import Axios from "axios"
import { toast } from "react-toastify";
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
   
   }, {
     withCredentials: true
   })
   .then(res => {
     if (res) {
       console.log(res.headers)
       return res.data
     } else {
       return Promise.reject(res.data)
     }
   })
   .catch(err => {
     toast.error(err.response.data.error)
     return false;
   })
 }
 
 export default getApi
 