// inital state
const initalState = {
    username: '',
    password: '',
    userid: 0
    // profile_pic: '',
    // title: '',
    // image: '',
    // content: ''
}

// Action Constants
const SET_USER = 'SET_USER'
// const SET_POST = 'SET_POST'

// Action Builders
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

// export function setPost(post) {
//     return {
//         type: SET_POST,
//         payload: post
//     }
// }

// Reducer
export default (state = initalState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            const { username, password  } = payload
            return { ...state, username, password }
        // case SET_POST:
        //     const { title, image, content } = payload
        //     return { ...state, title, image, content }
        default: return state
    }
}   