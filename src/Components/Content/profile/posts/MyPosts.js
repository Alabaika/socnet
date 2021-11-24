import postClass from './posts.module.css'
import Post from './post/Post'
import React from "react";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../Utils/Validators/Validators";
import {Textarea} from "../../../Common/FormsControls/formsControls";


const maxLength15 = maxLengthCreator(15);

let AddNewPostForm = (props) => {
    return <Form className={postClass.addPost} onSubmit={props.handleSubmit}>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength15]}/>
        <button>Send</button>
    </Form>;
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements = [...props.postData]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div>
            <AddNewPostForm onSubmit={onAddPost}/>
            {postsElements}
        </div>

    )
});

export default MyPosts;