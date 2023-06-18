export interface Category{
    id:number,
    name:string
}

export interface LikeComment{
    id?:number,
    num:number,
    commentId:number
}

export interface LikeQuestion{
    id?:number,
    num:number,
    questionId:number
}

export interface Comments{
    id:number,
    text:string,
    email:string,
    questionId:number,
    likecomment:LikeComment[],
    rating:number
}

export interface Question{
    id:number,
    question:string,
    categoryId:number,
    likeques:LikeQuestion[],
    category:Category,
    comment:Comments[],
    likeq:number
}