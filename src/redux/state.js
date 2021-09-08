import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {message: "Hi, how are you?", likes: 15},
                {message: "It is may be cool", likes: 23},
                {message: "It is may be bad", likes: 47}
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Krystyna"},
                {id: 3, name: "Tina"},
                {id: 4, name: "Syliko"},
                {id: 5, name: "Iordan"},
                {id: 6, name: "Iordan"}
            ],
            messagesData: [
                {message: "how are yo man?"},
                {message: "how are yo"},
                {message: "how are "},
                {message: "how are yo "},
                {message: "how are yo ma"}
            ],
            newMessageBody: "",

        },
        navbarData: {
            friendsData: [
                {name: "Syliko"},
                {name: "Krystyna"},
                {name: "Tina"}
            ]
        }
    },
    _callsubscriber() {
        console.log("state changed")
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarData = navbarReducer(this._state.navbarData, action);

        this._callsubscriber(this._state)
    }
}









export default store;

window.store = store;