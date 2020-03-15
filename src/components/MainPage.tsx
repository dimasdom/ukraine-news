import React, {useEffect, useState} from 'react'
// @ts-ignore
import { connect } from 'react-redux'
import {getNews} from "../selectors";
import {fetchNewsThunk} from "../redux/thunks/thunks";
import NewsBlock from "./NewsBlock";
import Button from "antd/es/button";
import {articlesobj} from '../redux/reducers/NewsReducer'
interface PropsTypes {
    News:any[]
    fetchNews:any
}

let MainPage:React.FC<PropsTypes> = (props)=>{
    const useFetching = (someFetchActionCreator:any) => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching(props.fetchNews)
    let [category,setCategory] = useState<string>('');
    return (
        <div className='container text-center'>
            <h1 className='display-4 text-center m-4'>Ukraine:Last news</h1>
            <Button type={category === 'science' ?"primary":"default"} className={"m-1"} onClick={()=>{setCategory('science');props.fetchNews('science')}}>Science</Button>
            <Button type={category === 'entertainment' ?"primary":"default"} className={"m-1"} onClick={()=>{setCategory('entertainment');props.fetchNews('entertainment')}}>Entertainment</Button>
            <Button type={category === 'health' ?"primary":"default"} className={"m-1"} onClick={()=>{setCategory('health');props.fetchNews('health')}}>Health</Button>
            <Button type={category === 'sports' ?"primary":"default"} className={"m-1"} onClick={()=>{setCategory('sports');props.fetchNews('sports')}}>Sports</Button>
            <Button type={category === 'technology' ?"primary":"default"} className={"m-1"} onClick={()=>{setCategory('technology');props.fetchNews('technology')}}>Technology</Button>
            <Button type={category === 'business' ?"primary":"default"} className={"m-1"} onClick={()=>{setCategory('business');props.fetchNews('business')}}>Business</Button>
            {
                props.News.map((news:articlesobj) => <NewsBlock author={news.author} source={news.source} title={news.title} url={news.url} urlToImage={news.urlToImage}/>)
            }

        <div className="container">
            <div className="row">
                <div className="col">Made by <a href={"https://github.com/dimasdom"}>Badash</a></div>
                <div className="col">Powered by <a href={"https://newsapi.org/"}>News API</a></div>
            </div>
        </div>
        </div>
    )
};

let mapStateToProps = (state:any):object=>({
    News:getNews(state)
})
let mapDispatchToProps:object = {
    fetchNews:fetchNewsThunk
}

export default  connect(mapStateToProps,mapDispatchToProps)(MainPage)