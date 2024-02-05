import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./components/QuizSlice"

export const store = configureStore({
    reducer: {
        quiz: quizReducer
    }
})