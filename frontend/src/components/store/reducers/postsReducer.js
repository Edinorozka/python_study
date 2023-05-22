const initState = {
    loading: true,
    success: false,
    errMsg: '',
    posts: [],
    post: {},
    count: '',
    next: '',
    last: '',
    pageNumber: 1,
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Post_success':
            return {...state, ...action}
        case 'Posts_onfetch':
            return {...state, posts: [], loading: true, success: false }
        case 'Post_error':
            return {...state, ...action }
        case 'Post_onfetch':
            return {...state, post: {}, loading: true, success: false }
        default:
            return {...state }
    }
}