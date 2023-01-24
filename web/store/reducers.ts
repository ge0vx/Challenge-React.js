import { userInfo } from "os";
import actionTypes from "./types";

export interface State {
  loading: boolean;
  requestError: boolean | undefined;
  message: string | undefined;
  user: any;
  resultList: any;
}

const initialState: State = {
  loading: false,
  requestError: undefined,
  message: undefined,
  user: undefined,
  resultList: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        message: undefined,
        requestError: false,
      };
    case actionTypes.LOG_IN_FAILED:
      return {
        ...state,
        user: undefined,
        message: action.payload,
        requestError: true,
      };
    case actionTypes.SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        resultList: action.payload,
        message: undefined,
        requestError: false,
      };
    case actionTypes.SEARCH_ITEMS_FAILED:
      return {
        ...state,
        resultList: undefined,
        message: action.payload,
        requestError: true,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
