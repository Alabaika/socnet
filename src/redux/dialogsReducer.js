const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Krystyna"},
        {id: 3, name: "Tina"},
        {id: 4, name: "Syliko"},
        {id: 5, name: "Iordan"}
    ],
    messagesData: [
        {message: "how are yo man?"},
        {message: "how are yo"},
        {message: "how are "},
        {message: "how are yo "},
        {message: "how are yo ma"}
    ],
};

const dialogsReducer = (state = initialState, action) => {




    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {message: body}],

            };
        default:
            return state;
    }
    return state;
}

export const sendMessageCreator = (newMessageBody) => {

    return {
        type : SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;