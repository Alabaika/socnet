import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES'

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It is may be cool", likes: 23},
        {id: 3, message: "It is may be bad", likes: 47}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };

        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id != action.postId)}
        case SAVE_PHOTO_SUCCES:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
    return state;
}

export const addPostActionCreator = (newPostText) => ({type : ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCES, photos});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSucces(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}




export default profileReducer;