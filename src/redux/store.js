// store の定義
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/post/postSlicer";

export const store = configureStore({
    reducer: {
        counter: counterReducer, // reducer を定義する
        posts: postsReducer
    },
})