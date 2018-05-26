import axios from 'axios';

export default {

    user:{
        login:(credential)=>{
            axios.post('api/auth',{credential}).then(res=>res.data.user)
        },
    },
}