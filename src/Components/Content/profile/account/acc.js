import profileClass from './account.module.css'
import userPhoto from "../../../../assets/images/photoWithout.jpeg";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/profileDataForm";


const Acc = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }



    const onMainPhotoSelected = (e) => {
        if (e.target.files.length ) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={profileClass.profile}>
            { props.isOwner && <input type={ "file" } onChange={onMainPhotoSelected}/>}
            <img alt="" className={profileClass.accHeader} src={props.profile.photos.large || userPhoto} />

            <img alt="" className={profileClass.avatar} src={props.profile.photos.small || userPhoto} />
            <div className="info">
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                { editMode
                    ? <ProfileDataForm profile={props.profile}
                                       onSubmit={onSubmit}
                                       initialValues={props.profile}
                    />
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                    />}

            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (

        <div>
            <p className={profileClass.name} ><b>{profile.fullName}</b></p>
            { isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Looking for a Job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key =>{
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}

            </div>

        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b>{contactValue}</div>
}



export default Acc