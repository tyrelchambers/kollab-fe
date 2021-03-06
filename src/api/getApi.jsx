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
    headers: {
      "token": window.localStorage.getItem("token") || window.sessionStorage.getItem("token") || ""
    }
   })
   .then(res => {
     if (res) {
        if (res.data.message) {
          toast.success(res.data.message)
        }

       return res.data
     } else {
       return Promise.reject(res.data)
     }
   })
   .catch(err => {
     toast.error(err)
     return false;
   })
 }
 
 export default getApi
 