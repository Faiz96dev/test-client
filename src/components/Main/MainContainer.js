import {connect} from "react-redux";
import Main from "./Main";
import {getCurrentUser, saveFieldsToDb, setChangedFields} from "../../redux/actions/User.actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {logOut} from "../../redux/actions/Auth.actions";
import history from "../../history";
import {saveDataToDb} from "../../services/user.service";

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: async () => {
            await dispatch(getCurrentUser())
        },
        Logout: async () => {
            await dispatch(logOut())
            history.push('/signin')
        },
        SetNewFields: async (payload) => {
            await dispatch(setChangedFields(payload))
        },
        saveNewFieldsDb: async (payload) => {
            console.log(payload)
           await saveDataToDb(payload)
        }
    }
}
let mapStateToProps = state => {
    return {
        userData: state.user.userData,
        newFields: state.user.newFields
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Main)
