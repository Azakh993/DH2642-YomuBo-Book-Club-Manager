import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting,
    selectUser,
} from "../../Store/slices/authSlice";
import LoginFormView from "./LoginFormView";
import {validateEmail, validatePassword} from "../../Utils/validation";

const LoginForm = function() {
    const error = useSelector( selectAuthenticationError );
    const waiting = useSelector( selectAuthenticationIsWaiting );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( resetAuthenticationStatus() );
    }, [ dispatch ] );

    const handleSubmit = ( email, password ) => {
        dispatch(
            authenticate( { email, password } )
        );
    };

    const validEmail = () => {
        return validateEmail(error);
    }

    const validPassword = () => {
        return validatePassword(error);
    }

    return (
        <div>
            <LoginFormView validEmail={ validEmail } validPassword={ validPassword }
                           error={ error } waiting={ waiting } onSubmit={ handleSubmit }/>
        </div>
    )
}

export default LoginForm;