import {connect} from "react-redux";
import history from "../../history";
import SignIn from "./SignIn";
import {userLogIn} from "../../redux/actions/Auth.actions";

let mapDispatchToProps = dispatch => {
    return {
        Login: async (data) => {
            await dispatch(userLogIn(data))
            history.push('/main')
        },
    }
}
export default connect(null, mapDispatchToProps)(SignIn)
