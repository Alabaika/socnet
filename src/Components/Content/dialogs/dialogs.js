import React from 'react';
import s from './dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message'






const Dialogs = (props) => {
    
      let dialogElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
      let messagesElements = props.messagesData.map( m => <Message message={m.message} />)
    
    

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs