import {stateType} from "./redux/store";

export const getNews = (state:stateType):object=> {
    return (state.News.articles);
}