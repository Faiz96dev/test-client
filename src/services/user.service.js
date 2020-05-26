import {getAccessToken, removeTokens} from "./cookies.service";
import {authAPI} from "../utils/api";
import {getCurrentUser} from "../redux/actions/User.actions";


export const saveDataToDb = async (payload) => {
    await authAPI.updateUserData(payload).then(r =>{
        console.log(r)
        getCurrentUser()
    })
}
