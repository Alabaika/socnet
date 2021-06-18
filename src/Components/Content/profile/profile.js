import contClasses from './profile.module.css'
import Acc from './account/acc'
import Posts from './posts/posts'


const Profile = (props) => {



    return (
        <div>
            <Acc />
            <Posts postData={props.postData}/>
        </div>
    )
}

export default Profile