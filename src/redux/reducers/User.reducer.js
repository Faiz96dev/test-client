import {ACTION_TYPES} from '../actions/User.actions';


const initialState = {
    userData: [],
    newFields: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, userData: action.payload
            }
        case ACTION_TYPES.SET_NEW_FIELDS:
            return {
                ...state, newFields: action.payload
            }
        case ACTION_TYPES.SET_NEW_FIELDS:
            return {
                ...state.newFields
            }
        default:
            return {...state}
    }
}
