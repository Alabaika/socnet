


let rerenderEntireTree = () =>{
    console.log("state changed")
}

let state = {
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
    },
    navbarData: {
        friendsData: [
            {name: "Syliko"},
            {name: "Krystyna"},
            {name: "Tina"}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state