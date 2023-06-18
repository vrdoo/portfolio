import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetalisComponent } from './question-detalis.component';

describe('QuestionDetalisComponent', () => {
  let component: QuestionDetalisComponent;
  let fixture: ComponentFixture<QuestionDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDetalisComponent]
    });
    fixture = TestBed.createComponent(QuestionDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
