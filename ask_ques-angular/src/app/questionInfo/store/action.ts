import { createAction, props } from "@ngrx/store"
import { Category, LikeComment, LikeQuestion, Question } from "../type"

export const getQuestionStart=createAction("getQuestionStart")
export const getQuestionSuccess = createAction("getQuestion",props<{ questions: Question[] }>())
export const questionsError=createAction("questionserror",props<{errorMsg:string}>())

export const getSearchStart=createAction("getQuestionSearchStart",props<{text:string}>())
export const getSearchSuccess = createAction("getQuestionSearch",props<{ questions: any }>())
export const searchError=createAction("searcherror",props<{errorMsg:string}>())



export const getQuestionByIdStart=createAction("getQuestionByIdStart",props<{id:number}>())
export const questionError=createAction("questionerror",props<{errorMsg:string}>())
export const getQuestionByIdSuccess = createAction("getbyidQuestion",
    props<{ question: Question }>()
)

export const addComment=createAction("addComment",props<{email:string,text:string,questionId:number}>())
export const addCommentSuccess=createAction("addCommentSuccess")
export const commentError=createAction("commenterror",props<{errorMsg:string}>())


export const addLikeQuestionStart=createAction("likequestionstart",props<{like:LikeQuestion}>())
export const addLikeQuestiomSuccess=createAction("likequestionsuccess")
export const likeQError=createAction("likequeserror",props<{errorMsg:string}>())


export const addLikeCommentStart=createAction("likecommentstart",props<{like:LikeComment}>())
export const addLikeCommentSuccess=createAction("likecommentsuccess")
export const likeCError=createAction("likecommerror",props<{errorMsg:string}>())


export const addQuestionStart=createAction("addquestionstart",props<{ques:Question}>())
export const addQuestionSuccess=createAction("addquestionsuccess")
export const questionAddError=createAction("questionAdderror",props<{errorMsg:string}>())

export const getAllCategoryStart=createAction("getallcategory")
export const getAllCategorySuccess=createAction("getallcategorysuccess",props<{categorys:Category[]}>())
export const categoryError=createAction("questionAdderror",props<{errorMsg:string}>())

