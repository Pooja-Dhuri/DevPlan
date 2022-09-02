import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Quotes = () => {

  const [quote,setQuote] =useState("");
  useEffect(() => {
   axios.get("https://motivational-quote-api.herokuapp.com/quotes/random")
   .then((res=>setQuote(res.data.quote)));
  }, [])
  
  return (
    <div>
      {quote}
    </div>
  )
}

export default Quotes