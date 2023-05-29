// Redux公式ページの記載内容を書き起こす。メモ用ページ
import { configureStore } from "@reduxjs/toolkit";
import { incrementByAmount } from "../features/counter/counterSlice";

/**
 * Action: create and returns action object
 * 通常「type」「payload」プロパティを持つ 
 */
const addToDoAction = {
    type: 'todos/todoAdded',
    payload: "Buy milk"
}

/**
 * Action creator: create and returns action object
 * @param {any} text
 * @return {any} Action Object
 */
const addToDo = text => {
    return {
        type: 'todos/todoAdded',
        payload: text
    }
}

/**
 * Reducer: a function that receives the current state and an action object and returns a new state.
 * ・現在の状態とアクションを受け取り、更新された状態を返す
 * ・イベントリスナーのような動きをする（アクションを検知して、状態を更新する）
 * @param {number | undefined} state
 * @param {any} action
 * @returns {any} newState 
 */
const initialState = 2;
const counterReducer = (state=initialState, action) => {
    if(action.type == "counter/increment"){
        return {
            ...state,
             value: state.value + 1
        }
    }
}

/**
 * Store: 現在のアプリケーションの状態（）
 */
const store = configureStore({ reducer:counterReducer })
console.log(store.getState())

/**
 * Dispatch: 状態の更新をする唯一のメソッド＝アクションをトリガーするもの
 */
store.dispatch({type:"counter/increment"})

// actiion creator
const increment = () => {
    return {
        type: "counter:increment"
    }
}
store.dispatch(increment())

/**
 * Selector: use when app grows bigger
 */
const selectCounterValue = state => state.value;
const currentValue = selectCounterValue(store.getState());
console.log(currentValue);

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}