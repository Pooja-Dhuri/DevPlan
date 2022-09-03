import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import style from "./Style.module.css"

const News = () => {
const [news,setNews]=useState([])
  let dateObj = new Date();

  let myDate = (dateObj.getUTCFullYear()) + "-" + (dateObj.getMonth() + 1)+ "-" + (dateObj.getUTCDate());
  // console.log(myDate)

  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=technology&from=${myDate}&sortBy=popularity&apiKey=ef816628ed504cd9b5a14971665bfb36`)
  .then((res)=>{
    console.log(res.data.articles)
    setNews(res.data.articles)
  })
  },[])
 

  return (
    <div className={style.newsmain}>
      {
        news.map((e)=>(
          <>
          <div className={style.newtitle}><h3>{e.title}</h3></div>
          <div className={style.newcontainer}>
          <div><img src={e.urlToImage} className={style.newsimg}/></div>
          <div>
              <div><h4>{e.author}</h4></div>
              <div><p>{e.description}</p></div>
          </div>
          </div>
          </>
        ))
      }
    </div>
  )
}

export default News