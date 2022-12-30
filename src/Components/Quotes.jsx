import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "./Style.module.css"


const Quotes = () => {

  const [quote,setQuote] =useState("");
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const random = getRandomInt(10)
  //console.log(random);
  useEffect(() => {
   axios.get(`https://my-mock-sever-api.onrender.com/quotes/${random}`)
   .then((res=>setQuote(res.data.quote)));
  }, [])
  
  
  return (
    <>
    <div className={style.QuotesBox}>
      <p>{quote}</p>
    </div>
   
    </>
  )
    
  
}

export default Quotes