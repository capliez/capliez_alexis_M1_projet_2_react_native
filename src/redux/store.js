import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(
  rootReducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
