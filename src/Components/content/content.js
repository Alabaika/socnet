import contClasses from './content.module.css'
import Profile from './profile/profile'
import Posts from './posts/posts'


const Content = () => {
    return (
        <div>
            <Profile />
            <Posts />
        </div>
    )
}

export default Content