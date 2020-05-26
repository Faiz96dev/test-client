import {decodeTokenToEmail} from "../../services/cookies.service";
import {authAPI} from "../../utils/api";


export const ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SET_NEW_FIELDS: 'SET_NEW_FIELDS',
    SAVE_NEW_FIELDS: 'SAVE_NEW_FIELDS'

}

export const getCurrentUser = () => async (dispatch) => {
    try {
        let _id = await decodeTokenToEmail()
        let userData = await authAPI.me(_id)
        return dispatch({
            type: ACTION_TYPES.SET_CURRENT_USER,
            payload: userData.data
        })
    } catch (err) {
        console.log(err)
    }
};
export const setChangedFields = (payload) => async (dispatch) => {
    try {
        return dispatch({
            type: ACTION_TYPES.SET_NEW_FIELDS,
            payload: payload
        })
    } catch (err) {
        console.log(err)
    }
};

export const saveFieldsToDb = () => async (dispatch) => {
    try {

        return dispatch({
            type: ACTION_TYPES.SAVE_NEW_FIELDS,
        })
    } catch (err) {
        console.log(err)
    }
}
