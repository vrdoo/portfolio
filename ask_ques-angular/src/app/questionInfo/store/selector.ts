import { createFeatureSelector, createSelector } from "@ngrx/store"
import { App } from "src/app/appInterfase"
import {Question} from "../type"
import { QuestionState } from "./reducer"



const getQuestionState=createFeatureSelector<QuestionState>("questions")



export const getAllQuestion = createSelector(getQuestionState, (state) => {
   return state.questions
})

export const getQuestion = createSelector(getQuestionState, (state) => {
   return state.question
})

export const getError = createSelector(getQuestionState, (state) => {
   return state.errorMessage
})

export const getCategory = createSelector(getQuestionState, (state) => {
   return state.category
})