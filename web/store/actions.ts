import actionTypes from "./types";

export const useActions = (state, dispatch) => ({
    signIn: (payload) => dispatch({type: actionTypes.LOG_IN, payload}),
    searchItems: (payload) => dispatch({type: actionTypes.SEARCH_ITEMS, payload})
});