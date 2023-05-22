const initState = {
    load: true,
    suc: false,
    errMsg: '',
    categories: [],
    category: {},
}

export const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Category_success':
            return {...state, ...action}
        case 'Categories_onfetch':
            return {...state, posts: [], load: true, suc: false }
        case 'Category_error':
            return {...state, ...action }
        case 'Category_onfetch':
            return {...state, post: {}, load: true, suc: false }
        default:
            return {...state }

    }
}