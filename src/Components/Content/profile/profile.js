import Acc from './account/acc'
import MyPostsContainer from "./posts/MyPostsContainer";


const Profile = (props) => {




    return (
        <div>
            <Acc profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile