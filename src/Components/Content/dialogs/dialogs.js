import React from 'react';
import s from './dialogs.module.css'
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';
import {Redirect} from 'react-router-dom'
import {Field, reduxForm, values} from "redux-form";
import {Textarea} from "../../Common/FormsControls/formsControls";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";






const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messagesData.map( m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    if  ( !props.isAuth ) return <Redirect to={"/login"} />;
    

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const maxLength300 = maxLengthCreator(300);

const AddMessageForm = (props) => {
    return (
        <form className={s.addMessage} onSubmit={ props.handleSubmit }>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength300]}
                       name={"newMessageBody"}
                       placeholder={'enter your message'} />
            </div>
            <div>
                <button > Send </button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs