import React from 'react';
import s from './dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message'






const Dialogs = (props) => {
    
    let dialogElements = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messagesData.map( m => <Message message={m.message} />)
    
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div className={s.addMessage}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={ addMessage }> Send </button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs