import Cookies from 'js-cookie/src/js.cookie'
import jwt_decode from 'jwt-decode'

export const setTokensToCookies = (tokens) => {
    Cookies.set('access', tokens.access);
    Cookies.set('refresh', tokens.refresh);
}

export const getAccessToken =  () => {
    return  Cookies.get('access');
}

export const getRefreshToken =  () => {
    return  Cookies.get('refresh');
}

export const removeTokens =  () => {
      Cookies.remove('refresh');
      Cookies.remove('access');
}

export const  decodeTokenToEmail = async () =>{
 return await jwt_decode(getAccessToken())._id
}
