const initState = {
    userLoading: true,
    userSuccess: false,
    userErrMsg: '',
    User: {},
    userToken: ''
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'User_success':
            return {...state, ...action}
        case 'User_onfetch':
            return {...state, User: {}, loading: true, success: false }
        case 'User_error':
            return {...state, ...action }
        default:
            return {...state }
    }
}