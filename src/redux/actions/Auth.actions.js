import {getAccessToken, removeTokens, setTokensToCookies} from "../../services/cookies.service";
import {LogIn,} from "../../services/auth.service";

export const ACTION_TYPES = {
    GET_AUTH: 'GET_AUTH',
    SET_AUTH: 'SET_AUTH',
    REMOVE_AUTH: 'REMOVE_AUTH'

}

export const setAuth = () => async (dispatch) => {
    try {
        return dispatch({
            type: ACTION_TYPES.SET_AUTH
        })
    } catch (err) {
        console.log(err)
    }
};

export const userLogIn = (data) => async (dispatch) => {
    try {
        await LogIn(data).then(r => {
            if (typeof r === 'object') {
                setTokensToCookies(r)
                return dispatch({
                    type: ACTION_TYPES.SET_AUTH
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
};

export const logOut = () => (dispatch, getState) => {
    try {
        removeTokens()
        return dispatch({
            type: ACTION_TYPES.REMOVE_AUTH
        })

    } catch (err) {
        console.log(err)
    }
};

