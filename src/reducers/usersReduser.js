import { LOAD_USERS } from '../actions/actionTypes'

function usersReducer(state = [], action) {
    console.log({ state, action });
    switch (action.type) {
        case LOAD_USERS:
            console.log('@LOAD_USERS');
            console.log({ state, action });
            return action.users;

        default:
            return state;
    }
}

export default usersReducer