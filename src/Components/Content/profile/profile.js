import contClasses from './profile.module.css'
import Acc from './account/acc'
import Posts from './posts/posts'
import {updateNewPostText} from "../../../redux/state";


const Profile = (props) => {



    return (
        <div>
            <Acc />
            <Posts postData={props.profilePage.postData}
                   newPostText={props.profilePage.newPostText}
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost}/>
        </div>
    )
}

export default Profile