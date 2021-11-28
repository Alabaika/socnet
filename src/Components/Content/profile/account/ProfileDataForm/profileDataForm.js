import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../Common/FormsControls/formsControls";
import profileClass from "../account.module.css";
import style from "../../../../Common/FormsControls/formsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div><button>Save</button></div>
            {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <p className={profileClass.name} >
                { createField ("Full Name", "fullName", [], Input)}
            </p>
            <div>
                <b>Looking for a Job:</b>
                { createField ("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills</b>
                { createField ("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About me:</b>
                { createField ("About Me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key =>{
                return <div key={key}>
                    <b>{key}: {createField (key, "contacts." + key, [], Input)}</b>
                </div>
                })}

            </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;