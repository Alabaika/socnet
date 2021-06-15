import postStyles from './post.module.css'

const Post = (props) => {
    return(
    <div className={postStyles.postCon}>
        <img className={postStyles.postAva} src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg" alt="" />
        <p className={postStyles.postText}>{props.message}</p>
        <p className={postStyles.likes}>{props.likes}</p>
    </div>
    )
}

export default Post