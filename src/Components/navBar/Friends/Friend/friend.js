import friendClasses from './friend.module.css'


let Friend = (props) => {
    return(
        <div className={friendClasses.friend}>
            <img src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg" className={friendClasses.friendAva}/>
            <p className={friendClasses.friendName}>{props.name}</p>
        </div>
    )
};

export default Friend;