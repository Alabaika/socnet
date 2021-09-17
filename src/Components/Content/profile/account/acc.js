import profileClass from './account.module.css'
import Preloader from "../../../Common/Preloader/Preloader";

const Acc = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={profileClass.profile}>
            <img alt="" className={profileClass.accHeader} src={props.profile.photos.large} />
            <img alt="" className={profileClass.avatar} src={props.profile.photos.small} />
            <div className="info">
                <p className={profileClass.name} >{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}



export default Acc