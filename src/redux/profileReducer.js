const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = 'ADD-POST';


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likes: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }
    return state;
}

export const addPostActionCreator = () => {

    return {
        type : ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;