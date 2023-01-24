import React, { createContext, useReducer, Dispatch } from "react";
import { reducer, initialState, State } from "./reducers";
import { useActions } from "./actions";
import applyMiddleware from "./middleware";
import actionTypes from "./types";

type Context = {
  state: State;
  enhancedDispatch: Dispatch<typeof actionTypes>;
  actions: any;
};

const initialStoreContext: Context = {
  state: initialState,
  enhancedDispatch: (_a) => {},
  actions: null,
};

const StoreContext = createContext<Context>(initialStoreContext);

const StoreProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const enhancedDispatch = applyMiddleware(state)(dispatch);
  const actions = useActions(state, enhancedDispatch);

  return (
    <StoreContext.Provider value={{ state, enhancedDispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
