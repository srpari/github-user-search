import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER, SET_NOTFOUND } from './types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SET_NOTFOUND:
            return {
                ...state,
                error: true,
                loading: false,
            }
        case CLEAR_USERS:
            return {
                ...state,
                error: false,
                loading: false,
                users: []
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}