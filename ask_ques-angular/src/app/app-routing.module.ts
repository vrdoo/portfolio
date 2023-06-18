import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './questionInfo/question/question.component';
import { AddQuestionComponent } from './questionInfo/add-question/add-question.component';
import { QuestionDetalisComponent } from './questionInfo/question-detalis/question-detalis.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"topquestion",component:QuestionComponent},
  {path:"addquestion",component:AddQuestionComponent},
  {path:"see/:id",component:QuestionDetalisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
