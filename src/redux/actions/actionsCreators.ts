import {FETCH_NEWS} from "./actionTypes";

type ACType = {
    type:string
    payload:any
}

export const fetchNews = (payload:object):ACType => ({type:FETCH_NEWS,payload:payload});