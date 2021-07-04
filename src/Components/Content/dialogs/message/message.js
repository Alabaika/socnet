import s from '../dialogs.module.css'




const Message = (props) => {




    return(
        <div className={s.message}>
            <img src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg" />
            <p>{props.message}</p>
        </div>
    )
}

export default Message