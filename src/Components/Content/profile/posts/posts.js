import postClass from './posts.module.css'
import Post from './post/Post'






const Posts = (props) => {

    let postsElements = props.postData.map( p => <Post message={p.message} likes={p.likes} />)

    return (
        <div className={postClass.addPost}>
            <input type="textarea"></input>
            <button>Send</button>
            { postsElements }
        </div>
    )
}

export default Posts;