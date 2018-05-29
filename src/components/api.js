import axios from 'axios';

// let ApiBase = axios.create({
//     baseURL: 'http://localhost:8080/api'
//   })

  axios.interceptors.request.use(request => {
    return request;
  }, function (error) {
      
    // Do something with response error
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(response=>{
      return response;
  }, function (error) {
      
    // Do something with response error
    return Promise.reject(error);
  });


export default {

    user:{
        login:async (credential)=>{
            await axios.post('api/auth/',{credential})
            .then(res=>res.data.user)
           
        },
    },
}