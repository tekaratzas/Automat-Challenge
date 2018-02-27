import { SET_STORIES } from './../actions';
const initialState = {
    stories: []
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case SET_STORIES:
            return {
                ...state,
                stories: action.stories,
            }
        default: return state;
    }
}