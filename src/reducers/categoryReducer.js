import { LOAD_CATEGORIES } from '../actions/actionTypes'

function categoryReducer(state = [], action) {
    console.log({ state, action });
    switch (action.type) {
        case LOAD_CATEGORIES:
            console.log('@LOAD_CATEGORIES');
            console.log({ state, action });
            return action.categories;

        default:
            return state;
    }
}

export default categoryReducer