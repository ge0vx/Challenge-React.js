import { Dispatch } from "react";
import actionTypes from "./types";
import api from "./api";
import { State } from "./reducers";

const applyMiddleware = (state: State) => (dispatch: any) => (action: any) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      dispatch({ type: actionTypes.LOADING, payload: true });
      api
        .logIn(action.payload)
        .then((response) => {
          reponseHandler(
            dispatch,
            response,
            actionTypes.LOG_IN_SUCCESS,
            actionTypes.LOG_IN_FAILED
          );
        })
        .finally(() => {
          dispatch({ type: actionTypes.LOADING, payload: false });
        });
      break;

    case actionTypes.SEARCH_ITEMS:
      dispatch({ type: actionTypes.LOADING, payload: true });
      api
        .searchItems(action.payload)
        .then((response) => {
          reponseHandler(
            dispatch,
            response,
            actionTypes.SEARCH_ITEMS_SUCCESS,
            actionTypes.SEARCH_ITEMS_FAILED
          );
        })
        .finally(() => {
          dispatch({ type: actionTypes.LOADING, payload: false });
        });
      break;

    default:
      return state;
  }
};

function reponseHandler(
  dispatch: any,
  response: any,
  successAction: any,
  errorAction: any = null
) {
  if (response.success) {
    dispatch({ type: successAction, payload: response.payload });
  } else {
    const { message = "Error in request" } = response;
    !!errorAction &&
      dispatch({
        type: errorAction,
        payload: message,
      });
  }
}

export default applyMiddleware;
