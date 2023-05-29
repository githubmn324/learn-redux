// slice の定義
// ・Store は 複数の Slice で構築される。
// ・各Slice は Reducer, Action Creator, State を持つ。
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createSlice()を利用する事で不変の更新をより簡単な方法で作成できる
export const counterSlice = createSlice({
    // reducer name
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        // Reducerを定義すると、Redux toolkitが
        // Reducerと同じ名前で Action creatorを自動作成してくれる
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= -1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        // 非同期処理以下ではうまくいかない為、学習予定
        // incrementAsync: (state, action) => {
        //     createAsyncThunk(state.value += action.payload;
        // },
    }
});

export const { increment, decrement, incrementByAmount, incrementAsync } = counterSlice.actions;
export default counterSlice.reducer;