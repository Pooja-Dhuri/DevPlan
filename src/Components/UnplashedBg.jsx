import axios from 'axios'
import React, { useEffect ,useState} from 'react';
import Time from './Time';
import Weather from "./Weather";
import style from "./Style.module.css"
import Quotes from './Quotes';




const UnplashedBg = () => {
    const[bg,setbg]=useState("https://images.unsplash.com/photo-1544247341-a0ab7d0955c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9");

    // useEffect(() => {
    // axios.get("https://api.unsplash.com/photos/random/?orientation=landscape&count=1&client_id=Jjl5auiyfxoz-DTmaFtBj29XEL3sPNuQq5g1c5FoOPA")
    // .then((res)=>{
    //     // console.log(res.data[0].urls.full)
    //    return  setbg(res.data[0].urls.full)
    // })

    // }, [])
    const myStyle={
        backgroundImage: 
 `url(${bg})`,
        height:'100vh',
        color:"white",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    };

  return (
    <div style={myStyle} id={style.myStyle}>
      <div className={style.topbox}>
        <div>Links</div>
        <div> <Weather/> </div>
      </div>
      <div className={style.timeBox}>
      <Time/>
      </div>

      <div>
       <Quotes/>
      </div>
      
   
       
    </div>
  )
}

export default UnplashedBg



// hello Ashwini pooja
// Jjl5auiyfxoz-DTmaFtBj29XEL3sPNuQq5g1c5FoOPA
// //https://api.unsplash.com/photos/random/?orientation=landscape&count=1&client_id=Jjl5auiyfxoz-DTmaFtBj29XEL3sPNuQq5g1c5FoOPA


// weather api
// {/* https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6b84dcc2fc3441b19d2cb5a22499c07e
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=870a4d4e2d4f5b6fe6e4950b5c562ca5 */}

// {/* function getlocation() {
// navigator.geolocation.getCurrentPosition(success);
// function success(position) {
//  let crd = position.coords;
//  setLatitude(crd.latitude);
//  setLongitude(crd.longitude);
// }
// } */}


// news api
// NewsChatter  ----okJH9EnI0e90pak2pTSchLv5sLieg0x7qqBAZ3YG1gU
// News Api -----ef816628ed504cd9b5a14971665bfb36
// https://newsapi.org/v2/everything?q=technology&from=2022-09-01&sortBy=popularity&apiKey=ef816628ed504cd9b5a14971665bfb36



// motivational quotes
// https://motivational-quote-api.herokuapp.com/quotes/random