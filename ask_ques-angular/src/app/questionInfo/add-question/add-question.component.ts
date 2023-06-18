import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/appInterfase';
import { Category } from '../type';
import { getCategory } from '../store/selector';
import { getAllCategoryStart } from '../store/action';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addQuestionStart } from '../store/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  categorys!: Category[]
  addForm!: FormGroup

  constructor(private store: Store<App>,private router:Router) {
    this.store.select(getCategory).subscribe((data) => {
      this.categorys = data
    })
  }

  ngOnInit(): void {
    this.store.dispatch(getAllCategoryStart())

    this.addForm = new FormGroup({
      question: new FormControl(null, [
        Validators.required]),
      categoryId: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  addQuestion(){
    this.store.dispatch(addQuestionStart({ques:{...this.addForm.value}}))
    this.router.navigate(["topquestion"])
  }
}
