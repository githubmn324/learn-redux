import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../../DummyData";

export const postSlice = createSlice({
    name: "posts",
    initialState: { value: PostsData },
    reducers: {
        addPost: (state, action)=>{
            state.value.push(action.payload);
        },
        deletePost: (state, action)=> {
            state.value.pop(action.payload)
        }
    },
});

export default postSlice.reducer;
export const { addPost, deletePost } = postSlice.actions;