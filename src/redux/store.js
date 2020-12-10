import userReducer from "./user/userReducer";
import dataReducer from "./data/dataReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    users: userReducer,
    data: dataReducer,
});

const midddleware = [thunk, logger];

// const persistConfig = {
//   key: "user",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// export const store = createStore(
//   persistedReducer,
//   applyMiddleware(...midddleware)
// );

//  Without presistor
export const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// export const persistor = persistStore(store);
