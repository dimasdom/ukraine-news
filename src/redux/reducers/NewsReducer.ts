import {FETCH_NEWS} from "../actions/actionTypes";
interface actionType{
    type:string
    payload: any
}

export interface articlesobj {
    source:object|null
    author:string|null
    title:string|null
    description?:string|null
    url:string|undefined
    urlToImage:string|null
    publishedAt?:string|null
    content?:string|null
}
export interface InitialNewsStateType {
    articles: articlesobj[]
}

let InitialState:InitialNewsStateType = {
articles:[]
};

function NewsReducer(state = InitialState , action:actionType){
    switch (action.type) {
        case FETCH_NEWS:{
            return {
                articles:[...action.payload.articles]
            }
        }
        default : return state
    }
}

export default NewsReducer
