import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, of, catchError, Observable, EMPTY, exhaustMap } from "rxjs"
import * as QuestionActions from "./action"
import { QuestionService } from "../question.servise";
import { Question } from "../type";
import { ActivatedRoute } from "@angular/router";


@Injectable()
export class QuestionsEffects {

    getQues$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.getQuestionStart),
            exhaustMap((action) => {
                return this.quesService.getQuestions().pipe(
                    map((data) => {
                        return QuestionActions.getQuestionSuccess({ questions: data })
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.questionError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })

    getSearch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.getSearchStart),
            exhaustMap((action) => {
                return this.quesService.getSearchQuestion(action.text).pipe(
                    map((data) => {
                        console.log(data);
                        return QuestionActions.getSearchSuccess({ questions:data })
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.searchError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })
    getQuestion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.getQuestionByIdStart),
            exhaustMap((action) => {
                return this.quesService.getQuestion(action.id).pipe(
                    map((data) => {
                        return QuestionActions.getQuestionByIdSuccess({ question: data })
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.questionsError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })
    getCategory$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.getAllCategoryStart),
            exhaustMap((action) => {
                return this.quesService.getAllCategory().pipe(
                    map((data) => {
                        return QuestionActions.getAllCategorySuccess({ categorys: data })
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.categoryError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })

    addComment$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.addComment),
            exhaustMap((action) => {
                return this.quesService.addComment({ email: action.email, text: action.text, questionId: action.questionId }).pipe(
                    map((data) => {
                        return QuestionActions.addCommentSuccess()
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.commentError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })

    addLikeQuestion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.addLikeQuestionStart),
            exhaustMap((action) => {
                return this.quesService.likequestion(action.like).pipe(
                    map((data) => {
                        return QuestionActions.addLikeQuestiomSuccess()
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.likeQError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })

    addLikeComment$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.addLikeCommentStart),
            exhaustMap((action) => {
                return this.quesService.likecomment(action.like).pipe(
                    map((data) => {
                        return QuestionActions.addLikeCommentSuccess()
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.likeCError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })
    addQuestion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(QuestionActions.addQuestionStart),
            exhaustMap((action) => {
                return this.quesService.addQuestion(action.ques).pipe(
                    map((data) => {
                        return QuestionActions.addQuestionSuccess()
                    }),
                    catchError((error: { message: string }) =>
                        of(QuestionActions.questionAddError({ errorMsg: error.message }))
                    )
                )
            })
        )
    })


    constructor(private actions$: Actions, private quesService: QuestionService, private router: ActivatedRoute) { }
}