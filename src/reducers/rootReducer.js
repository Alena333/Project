import { combineReducers } from 'redux'
import notesReducer from './notesReducer'
import authReducer from './authReducer'
import projectReducer from './projectReducer';
import categoryReducer from './categoryReducer';
import usersReducer from './usersReduser';

const rootReducer = combineReducers({
    notes: notesReducer,
    auth: authReducer,
    projects: projectReducer,
    categories: categoryReducer,
    users: usersReducer
});

export default rootReducer