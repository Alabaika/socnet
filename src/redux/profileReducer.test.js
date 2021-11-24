import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    postData: [
        {message: "Hi, how are you?", likes: 15, id: 1},
        {message: "It is may be cool", likes: 23, id: 2},
        {message: "It is may be bad", likes: 47, id: 3}
    ],
    profile: null,
    status: ""
};


test('length of posts should be incremented ', () => {
    //1. Test data
    let action = addPostActionCreator("some text")
    //2. action
    let newState = profileReducer(state, action)
    //3 Expectation
    expect(newState.postData.length).toBe(4)
});

test('Message of new post should be correct', () => {
    //1. Test data
    let action = addPostActionCreator("some text")

    //2. action
    let newState = profileReducer(state, action)
    //3 Expectation
    expect(newState.postData[3].message).toBe("some text")
});

test('after deleting length of message should be decrement', () => {
    //1. Test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action)
    //3 Expectation
    expect(newState.postData.length).toBe(2)
});

test('after deleting length of message shouldn\'t be decrement if id is incorrect', () => {
    //1. Test data
    let action = deletePost(10)

    //2. action
    let newState = profileReducer(state, action)
    //3 Expectation
    expect(newState.postData.length).toBe(3)
});
