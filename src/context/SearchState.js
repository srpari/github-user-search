import React, { useReducer } from 'react'
import axios from 'axios'
import Context from './Context'
import Reducer from './Reducer'
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER, SET_NOTFOUND } from './types'


const rootUrl = "https://api.github.com";

const SearchState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        error: false,
    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    // Search User
    const searchUsers = async (searchType, text) => {
        setLoading();
        // const res = await axios.get(
        //     // `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
        //     `https://api.github.com/search/users?q=${text}`
        // );

        // dispatch({
        //     type: SEARCH_USERS,
        //     payload: res.data.items
        // });

        const res = await axios(`${rootUrl}/search/users?q=${text}+type:${searchType}`).catch((err) =>
            console.log(err)
        );
        console.log(res.data);
        if (res.data.items.length > 0) {
            dispatch({
                type: SEARCH_USERS,
                payload: res.data.items
            });

            // const { loginid, url } = res.data.items;
            // await Promise.allSettled([
            //     axios(`${rootUrl}/users/${text}/repos?per_page=5&sort=created:asc`),
            //     axios(`${rootUrl}/users/${text}`)
            // ])
            //     .then((results) => {
            //         // console.log(results)
            //         // const [repos, url] = results;
            //         // const status = "fulfilled";
            //         // if (repos.status === status) {
            //         dispatch({
            //             type: GET_REPOS,
            //             payload: res.data,
            //         });
            //         // }
            //         // if (url.status === status) {
            //         dispatch({ type: GET_USER, payload: res.data });
            //         // }
            //     })
            //     .catch((err) => console.log(err));
        }
        else {
            // console.log("Not Found");
            dispatch({ type: SET_NOTFOUND });
        }


    };


    // Get USer
    const getUser = async userName => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/users/${userName}`
        );
        dispatch({ type: GET_USER, payload: res.data });
    };

    // Get Repos
    const getUserRepos = async userName => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/users/${userName}`
        );

        dispatch({
            type: GET_REPOS,
            payload: res.data,
        });
    };


    // Clear Users
    const userClear = () => dispatch({ type: CLEAR_USERS });

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <Context.Provider
        value={
            {
                typeSearch: state.typeSearch,
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                error: state.error,
                searchUsers,
                userClear,
                getUser,
                getUserRepos
            }
        }
    >
        {props.children}
    </Context.Provider>
}


export default SearchState;