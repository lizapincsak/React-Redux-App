import axios from 'axios';

export const FETCH_IMAGE_START = 'FETCH_IMAGE_START';
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";
export const FETCH_IMAGE_FAIL = "FETCH_IMAGE_FAIL";
export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";


export const getBreed = (value) => dispatch => {
    dispatch({type:FETCH_IMAGE_START})
    axios  
    .get(`https://dog.ceo/api/breed/${value}/images`)
    .then((res) => {
        console.log(res)
        dispatch({type:FETCH_IMAGE_SUCCESS, payload: {images: res.data.message, input: value}})
    })
    .catch((err) => {
        dispatch({ type: FETCH_IMAGE_FAIL, payload: err})
    })
}

export const onInputChange = (e) => {
    return {type: ON_INPUT_CHANGE, payload: e.target.value}
}