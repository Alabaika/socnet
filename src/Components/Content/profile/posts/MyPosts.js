import postClass from './posts.module.css'
import Post from './post/Post'
import React from "react";




const MyPosts = (props) => {
    let postsElements = props.postData.map( p => <Post message={p.message} likes={p.likes} />)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={postClass.addPost}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={ onAddPost }>Send</button>
            { postsElements }
        </div>
    )
}

export default MyPosts;