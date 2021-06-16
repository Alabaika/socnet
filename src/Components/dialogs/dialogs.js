import React from 'react';
import s from './dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/dialogItem';

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: "Sasha"},
    {id: 2, name: "Krystyna"},
    {id: 3, name: "Tina"},
    {id: 4, name: "Syliko"},
    {id: 5, name: "Iordan"},
]
let messagesData = [
    {message: "how are yo man?"},
    {message: "how are yo"},
    {message: "how are "},
    {message: "how are yo "},
    {message: "how are yo ma"}
]


let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messagesData.map( m => <Message message={m.message} />)

const Dialogs = () => {
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