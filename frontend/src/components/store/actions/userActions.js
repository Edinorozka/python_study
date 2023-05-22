import axios from "axios";

export const loginUser = async (dispatch, data) => {
    try{
        await axios.post('http://127.0.0.1:8000/auth/token/login/', data)
            .then(res => {
                dispatch({type: 'User_success', userToken: res.data, userLoading: false, userSuccess: true})
            })
    } catch (e) { dispatch({type: 'User_error', userToken: '', userLoading: false, userSuccess: false, errMsg: 'Error on loading user'})}
}

export const getUser = async (dispatch, userToken) => {
    try{
        await axios.get('http://127.0.0.1:8000/auth/users/me/', {headers: {'Authorization': `token ${userToken.auth_token}`}})
            .then(res => {
                dispatch({type: 'User_success', User: res.data, userLoading: false, userSuccess: true})
            })
    } catch (e) {dispatch({type: 'User_error', User: {}, userLoading: false, userSuccess: false, errMsg: 'Error on loading user'})}
}

export const createUser = async (dispatch, data) => {
    try{
        await axios.post('http://127.0.0.1:8000/auth/users/', data)
            .then(res => {
                dispatch({type: 'User_success', User: res, userLoading: false, userSuccess: true})
            })
    } catch (e) { dispatch({type: 'User_error', User: {}, userLoading: false, userSuccess: false, errMsg: 'Error on loading user'})}
}

export const logoutUser = async (dispatch, data) => {
    try{
        await axios.post('http://127.0.0.1:8000/auth/token/logout/', '',{headers: {'Authorization': `token ${data.auth_token}`}})
            .then(res => {
                dispatch({type: 'User_success', userToken: '', userLoading: false, userSuccess: true})
            })

    } catch (e) { dispatch({type: 'User_error', User: {}, userLoading: false, userSuccess: false, errMsg: 'Error on loading user'})}
}