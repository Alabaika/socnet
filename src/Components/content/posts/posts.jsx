import postClass from './posts.module.css'
import Post from './post/Post.jsx'

const Posts = () => {
    return (
        <div className={postClass.addPost}>
            <input type="textarea"></input>
            <button>Send</button>
            <Post message="Hi, how are you?" likes="15" />
            <Post message="It is may be cool" likes="23" />
        </div>
    )
}

export default Posts;