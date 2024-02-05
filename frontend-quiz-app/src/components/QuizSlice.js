import { createSlice } from "@reduxjs/toolkit";

const atFirst = {
    done: false,
    score: 0,
    title: "",
}

export const quizSlice = createSlice({
    name: 'quizValues',
    initialState: atFirst,
    reducers: {
        addToScore: (state) => {
            state.score ++;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDone: (state) => {
            state.done = true;
        },
        reset: (state) => {
            state.done = false;
            state.score = 0;
            state.title = "";
        }
    },
});

export const {addToScore, setTitle, setDone, reset} = quizSlice.actions;
export default quizSlice.reducer;