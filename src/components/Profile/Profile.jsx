import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {savePhoto} from "../../redux/profile-reducer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;