import postClass from './posts.module.css'
import Post from './post/Post'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";




const Posts = (props) => {

    let postsElements = props.postData.map( p => <Post message={p.message} likes={p.likes} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        //props.addPost();
        props.dispatch( addPostActionCreator() )
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        //let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch( updateNewPostTextActionCreator(text) )

    }


    return (
        <div className={postClass.addPost}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={ addPost }>Send</button>
            { postsElements }
        </div>
    )
}

export default Posts;