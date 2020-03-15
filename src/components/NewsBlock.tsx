import React from 'react'
import style from 'styled-components'
import {articlesobj} from "../redux/reducers/NewsReducer";

let StyledNewsBlock = style.div`
background:url(${(props: { back: string | undefined|null }) =>props.back});
background-size:cover;
height:20rem;
@media screen and (min-width: 900px) {
 height:40rem;
}
padding:0;
`
let Styledtextblock = style.div`
background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
width:100%;
height:12rem;
font-size:1rem;
h1{
font-size:1rem;
}
@media screen and (min-width: 900px) {
h1{
font-size:2.2rem;
}
 font-size:1.7rem;
}
font-family: 'Raleway', sans-serif;
`

let NewsBlock:React.FC<articlesobj> = (props)=>(
    <div className={"container mt-4  shadow"}>
        <a href={props.url}>
        <StyledNewsBlock className={"d-flex align-items-end"} back={props.urlToImage}>

            <Styledtextblock>
                <h1 className="text-left ml-3 text-white ">Author: {props.author}</h1>
                <br/>
                <p className={"text-left text-white ml-3"}>Title: {props.title}</p>
            </Styledtextblock>
        </StyledNewsBlock>
        </a>
    </div>
)

export default NewsBlock

