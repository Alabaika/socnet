import contClasses from './content.module.css'
import Profile from './profile/profile.jsx'
import Posts from './posts/posts.jsx'


const Content = () => {
    return (
        <div className={contClasses.content}>
            <Profile />
            <Posts />
        </div>
    )
}

export default Content