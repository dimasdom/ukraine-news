import {fetchNews} from "../actions/actionsCreators";
import {getNewsAPI} from "../api/api";

export const fetchNewsThunk = (category:string) => async (dispatch:any) => {
let News = await getNewsAPI(category);
dispatch(fetchNews(News)) ;
}
