import {initialStateType} from "./appReducer";

const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType ={
    message: string
}
let initialState = {
    dialogsData: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Krystyna"},
        {id: 3, name: "Tina"},
        {id: 4, name: "Syliko"},
        {id: 5, name: "Iordan"}
    ] as Array<DialogType>,
    messagesData: [
        {message: "how are yo man?"},
        {message: "how are yo"},
        {message: "how are "},
        {message: "how are yo "},
        {message: "how are yo ma"}
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any):InitialStateType => {




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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {

    return {
        type : SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;