import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/appInterfase';
import { Comments, LikeComment, LikeQuestion, Question } from '../type';
import { getAllQuestion, getError, getQuestion } from '../store/selector';
import * as QuesAction from "../store/action"
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms"



@Component({
  selector: 'app-question-detalis',
  templateUrl: './question-detalis.component.html',
  styleUrls: ['./question-detalis.component.css']
})
export class QuestionDetalisComponent {

  question!: Question
  id!: string | null
  quesFrom!: FormGroup
  myError!: string
  commLike: number = 0


  constructor(private store: Store<App>, private router: ActivatedRoute) {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id')
    })

    this.store.select(getQuestion).subscribe((data) => {
      this.question = {
        ...data, likeq: data.likeques?.reduce((a: number, b: any) => a + b.num, 0),
        comment: [...data.comment?.map((e: Comments) => ({ ...e, rating: e.likecomment.reduce((a: number, b: LikeComment) => a + b.num, 0) }))]
      }
    })
    this.store.select(getError).subscribe((data) => {
      this.myError = data
    })
  }

  ngOnInit(): void {
    if (this.id) {
      this.store.dispatch(QuesAction.getQuestionByIdStart({ id: +this.id }))
    }
    this.quesFrom = new FormGroup({
      email: new FormControl(null, [
        Validators.required]),
      text: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  addComment() {
    if (!this.quesFrom.valid) {
      return
    }
    else if (this.id) {
      this.store.dispatch(QuesAction.addComment({ email: this.quesFrom.value.email, text: this.quesFrom.value.text, questionId: +this.id }))
      this.store.dispatch(QuesAction.getQuestionByIdStart({ id: +this.id }))
    }
  }

  likeques() {
    this.store.dispatch(QuesAction.addLikeQuestionStart({ like: { num: 1, questionId: this.question.id } }))
    if (this.id) {
      this.store.dispatch(QuesAction.getQuestionByIdStart({ id: +this.id }))
    }

  }

  likecomm(id: number) {
    if (this.id) {
      this.store.dispatch(QuesAction.addLikeCommentStart({ like: { num: 1, commentId: id } }))
      this.store.dispatch(QuesAction.getQuestionByIdStart({ id: +this.id }))
    }
  }

}
