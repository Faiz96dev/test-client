import {connect} from "react-redux";
import SignUp from "./SignUp";
import {userLogIn} from "../../redux/actions/Auth.actions";
import * as authService from "../../services/auth.service";
import history from "../../history";

let mapDispatchToProps = dispatch => {
    return {
        Reg: async (payload) => {
           await authService.Reg(payload)
            await dispatch(userLogIn(payload))
            history.push('/main')
        },
    }
}
export default connect(null, mapDispatchToProps)(SignUp)
