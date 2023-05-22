import axios from "axios";

export const getPosts = async (dispatch, pageNumber) => {
    try{
        await axios.get(`http://127.0.0.1:8000/posts?page=${pageNumber}`)
            .then(data => {
                const res = data.data;
                if (res) {
                    dispatch({type: 'Post_success', posts: res.results, count: res.count, next: res.next, last: res.previous, loading: false, success: true})
                }
            })
    } catch (e) { dispatch({type: 'Post_error', posts: [], loading: false, success: false, errMsg: 'Error on loading api'})}

}

export const getPost = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:8000/post/${id}/`);
            const data = await response.data;
            dispatch({ type: 'Post_success', post: data , loading: false, success: true});
        } catch (error) {
            dispatch({ type: 'Post_error', errMsg: 'An error occurred while fetching the post.' });
        }
    };
};

export const updatePost = async (dispatch, id, data) => {
    try {
        await axios.put(`http://localhost:8000/post/${id}/`, data)
            .then(res => {
                dispatch({ type: 'Post_success', posts: [...res.post], loading: false, success: true })
            })
    } catch (error) {
        dispatch({ type: 'Post_error', posts: [], loading: false, success: false, errMsg: 'Ошибка при загрузки апи' })
    }
}

export const createPost = async (dispatch, data) => {
    try {
            await axios.post(`http://localhost:8000/posts`, data)
                .then(res => {
                    dispatch({type: 'Post_success', post: [...res.post], loading: false, success: true})
                })
    } catch (error) {
        dispatch({type: 'Post_error', posts: [], loading: false, success: false, errMsg: 'Ошибка при загрузки апи'})
    }
}