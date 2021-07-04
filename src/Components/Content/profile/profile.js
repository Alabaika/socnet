import contClasses from './profile.module.css'
import Acc from './account/acc'
import Posts from './posts/posts'


const Profile = (props) => {



    return (
        <div>
            <Acc />
            <Posts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile