import { USER_LOGGED_IN } from "../constant/type";

export default user(state={},action={}){
   
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;
            break;
    
        default:
            state;
    }
}