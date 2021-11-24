import Acc from './account/acc'
import MyPostsContainer from "./posts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";


const Profile = (props) => {




    return (
        <div>
            <Acc saveProfile={props.saveProfile} isOwner={ props.isOwner } savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile