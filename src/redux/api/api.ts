import  axios from 'axios'
const API_KEY:string = "bf1c48646ae741489de3fdc2e6f28153";
export const getNewsAPI = async (category:string) =>{
    return axios.get(`http://newsapi.org/v2/top-headlines?country=ua${category ? "&category="+category : ""}&apiKey=${API_KEY}`).then(response => {return response.data})
}