import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/formsControls";
import {required} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/FormsControls/formsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <Field placeholder={"Email"}
                       validate={[required]}
                       name={'email'}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"password"}
                       validate={[required]}
                       name={'password'}
                       type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={'rememberMe'}
                       component={Input}/> remember me
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} )(Login);