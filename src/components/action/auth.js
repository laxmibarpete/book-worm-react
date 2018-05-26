import { USER_LOGGED_IN } from '../constant/type';
import api from '../api';


export const userLoggedIn= (user)=>({
    type: USER_LOGGED_IN,
    user
});


export const login = (credential)=> 
    (dispatch)=>api.user.login(credential).then(user=>dispatch(userLoggedIn(user)));