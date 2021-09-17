import React from 'react';
import s from './dialogs.module.css'
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message'






const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messagesData.map( m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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