const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({message: body});
            break;
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