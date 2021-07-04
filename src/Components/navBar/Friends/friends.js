import Friend from "./Friend/friend";
import fClass from "./friends.module.css"
import Post from "../../Content/profile/posts/post/Post";


let Friends = (props) => {

    let friendElement = props.friendsData.map( p => <Friend name={p.name}/>)

    return(
        <div>
            <p className={fClass.topic}>Friends</p>
            <div className={fClass.oneFriend}>
                {friendElement}
            </div>


        </div>
    )
}

export default Friends;