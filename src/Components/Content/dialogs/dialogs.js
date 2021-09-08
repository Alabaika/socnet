import React from 'react';
import s from './dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";






const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messagesData.map( m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.addMessage}>
                    <div><textarea value={ newMessageBody} onChange={ onNewMessageChange }></textarea></div>
                    <div><button onClick={ onSendMessageClick }> Send </button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs