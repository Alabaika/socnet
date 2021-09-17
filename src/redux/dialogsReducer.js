const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY';
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
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {




    switch (action.type) {
        case NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, {message: body}],

            };
        default:
            return state;
    }
    return state;
}

export const sendMessageCreator = () => {

    return {
        type : SEND_MESSAGE,
    }
}
export const updateNewMessageBodyCreator = (body) => ({type: NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;