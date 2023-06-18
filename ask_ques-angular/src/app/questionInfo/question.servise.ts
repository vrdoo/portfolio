import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Category, Question } from "./type";


@Injectable()
export class QuestionService{
    constructor(private http:HttpClient){}
    getQuestions():Observable<Question[]>{
        return this.http.get<Question[]>("http://localhost:8080/question")
    }

    getQuestion(id:number):Observable<Question>{
        console.log(id);
        return this.http.get<Question>(`http://localhost:8080/question/${id}`)
    }

    addQuestion(obj:any){
        return this.http.post("http://localhost:8080/question",obj)
    }

    addComment(obj:any){
        return this.http.post("http://localhost:8080/comment",obj)
    }

    likequestion(obj:any){
        return this.http.post("http://localhost:8080/likequestion",obj)
    }

    likecomment(obj:any){
        return this.http.post("http://localhost:8080/likecomment",obj)
    }

    getAllCategory(){
        return this.http.get<Category[]>("http://localhost:8080/category")
    }

    getSearchQuestion(tetx:string){
        return this.http.post("http://localhost:8080/question/search",{text:tetx})
    }
}