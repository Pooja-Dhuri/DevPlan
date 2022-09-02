import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "./Style.module.css"


const Quotes = () => {

  const [quote,setQuote] =useState("");
  useEffect(() => {
   axios.get("https://motivational-quote-api.herokuapp.com/quotes/random")
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