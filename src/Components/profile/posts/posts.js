import postClass from './posts.module.css'
import Post from './post/Post'


let postData = [
    {message: "Hi, how are you?", likes: 15},
    {message: "It is may be cool", likes: 23}
]

let postsElements = postData.map( p => <Post message={p.message} likes={p.likes} />)

const Posts = () => {
    return (
        <div className={postClass.addPost}>
            <input type="textarea"></input>
            <button>Send</button>
            { postsElements }
        </div>
    )
}

export default Posts;