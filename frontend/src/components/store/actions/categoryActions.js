import axios from "axios";

export const getCategory = async (dispatch) => {
    try{
        await axios.get('http://127.0.0.1:8000/ser')
            .then(data => {
                const res = data.data;
                if (res) {
                    //console.log(res)
                    dispatch({type: 'Category_success', categories: res, load: false, suc: true})
                }
            })
    } catch (e) { dispatch({type: 'Category_error', categories: [], load: false, suc: false, errMsg: 'Error on loading category'})}
}