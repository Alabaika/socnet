import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
            dispatch( updateNewPostTextActionCreator(text) )
        },
        addPost: () => {
            dispatch( addPostActionCreator() )
        }
    }
}

const MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;