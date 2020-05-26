import {ACTION_TYPES} from '../actions/Auth.actions';
import * as authService from "../../services/auth.service";
import history from "../../history";

const initialState = {
    isAuth: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_AUTH:
            return {
                ...state.isAuth,
            }
        case ACTION_TYPES.SET_AUTH:
            console.log('fired set auth')
            return {
                ...state, isAuth: true,
            }

        case ACTION_TYPES.REMOVE_AUTH:
            return {

                ...state, isAuth: false,
            }
        default:
            return {...state}
    }
}
