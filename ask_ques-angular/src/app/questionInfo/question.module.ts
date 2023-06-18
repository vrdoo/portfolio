import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { QuestionComponent } from "./question/question.component";
import { QuestionDetalisComponent } from "./question-detalis/question-detalis.component";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { QuestionService } from "./question.servise";
import { QuestionsEffects } from "./store/effect";
import { postReducer } from "./store/reducer";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule,
        StoreModule.forFeature("questions", postReducer),
        EffectsModule.forFeature([QuestionsEffects]),
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [QuestionService],
    declarations: [QuestionComponent,
        QuestionDetalisComponent,
        AddQuestionComponent
    ],
    exports: [QuestionComponent,
        QuestionDetalisComponent,
        AddQuestionComponent]
})

export class QuestionModule { }