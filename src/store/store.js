import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "./reducers/mangas";
import authReducer from "./reducers/auth";

const store = configureStore({
    reducer: {
       mangas: mangasReducer,
       auth : authReducer
    }
});

export default store