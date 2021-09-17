import Friend from "./Friend/friend";
import fClass from "./friends.module.css"
import Post from "../../Content/profile/posts/post/Post";


let Friends = (props) => {



    return(
        <div>
            <p className={fClass.topic}>Friends</p>
            <div className={fClass.oneFriend}>

            </div>


        </div>
    )
}

export default Friends;