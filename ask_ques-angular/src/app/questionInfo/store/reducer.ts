import { createReducer, on } from "@ngrx/store"
import * as QuestionActions from "./action"
import { Category, Question } from "../type"

export interface QuestionState{
    questions:Question[],
    question:Question,
    errorMessage:string,
    category:Category[]
}

export const initialState: QuestionState = {
    questions: [],
    question: {} as Question,
    errorMessage:"",
    category:[]
}



const _postsReducer = createReducer(
    initialState,
    on(QuestionActions.getQuestionSuccess, (state, action) => {
        return {
            ...state,
            questions: action.questions
        }
    }
    ),
    on(QuestionActions.questionsError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.getQuestionByIdSuccess, (state, action) => {
        return {
            ...state,
            question: action.question
        }
    }
    ),
    on(QuestionActions.questionError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.addCommentSuccess, (state, action) => {
         return {
            ...state
         }
    }
    ),
    on(QuestionActions.commentError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.addLikeQuestiomSuccess, (state, action) => {
         return {
            ...state,
            question:state.question
         }
    }
    ),
    on(QuestionActions.likeQError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.addLikeCommentSuccess, (state, action) => {
         return {
            ...state,
            question:state.question
         }
    }
    ),
    on(QuestionActions.likeCError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.addQuestionSuccess, (state, action) => {
         return {
            ...state,
            questions:state.questions
         }
    }
    ),
    on(QuestionActions.questionAddError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.getAllCategorySuccess, (state, action) => {
         return {
            ...state,
            category:action.categorys
         }
    }
    ),
    on(QuestionActions.categoryError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
    on(QuestionActions.getSearchSuccess, (state, action) => {
         return {
            ...state,
            questions:action.questions
         }
    }
    ),
    on(QuestionActions.searchError, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMsg
        }
    }
    ),
)



export function postReducer(state:any,action:any){
    return _postsReducer(state,action)
}