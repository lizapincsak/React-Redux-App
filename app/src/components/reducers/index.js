import {FETCH_IMAGE_FAIL, FETCH_IMAGE_START, FETCH_IMAGE_SUCCESS, ON_INPUT_CHANGE} from '../actions/index';

export const initialState = {
    dogImages: [],
    dogBreed: '',
    isFetching: false,
    error: '',
    userInput: '',
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case(FETCH_IMAGE_START): 
        return({
            ...state, 
            isFetching: true, 
            error: '',
            dogBreed: '',
        })
        case(FETCH_IMAGE_SUCCESS):
            return({
                ...state, 
                isFetching: false, 
                dogBreed: action.payload.input,
                error: '',
                dogImages: action.payload.images,
                userInput: '',
            })
        case(FETCH_IMAGE_FAIL):
            return({
                ...state, 
                isFetching: false,
                error: action.payload
            })
        case(ON_INPUT_CHANGE):
            return({
                ...state, 
                userInput: action.payload, 
            })
        default:
            return state;
    }
}

