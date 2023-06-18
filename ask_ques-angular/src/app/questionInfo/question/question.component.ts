import { Component, OnInit } from '@angular/core';
import { App } from 'src/app/appInterfase';
import { Store } from "@ngrx/store"
import { Observable, exhaustMap, map } from 'rxjs';
import { Question } from '../type';
import * as QuesAction from "../store/action"
import { getAllQuestion } from '../store/selector';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  posts$!: Question[]

  constructor(private store: Store<App>) {
    this.store.select(getAllQuestion).subscribe((data) => {
      this.posts$ = data
    })
  }

  ngOnInit(): void {
    this.store.dispatch(QuesAction.getQuestionStart())
  }

  search(src:string){
    this.store.dispatch(QuesAction.getSearchStart({text:src}))
  }
}
