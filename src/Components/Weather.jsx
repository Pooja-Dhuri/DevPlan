import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Weather = () => {
  const [latitude,setLatitude]=useState()
  const [longitude,setLongitude]=useState()
  const [city,setCity]=useState("")
  const [temp,setTemp]=useState(0)


  function getlocation() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      let crd = position.coords;
      setLatitude(crd.latitude);
      setLongitude(crd.longitude);
    }
  }
  getlocation()

  function getDataLocation(latitude, longitude) {
    // console.log(latitude, longitude);
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude && latitude}&lon=${longitude && longitude}&apiKey=6b84dcc2fc3441b19d2cb5a22499c07e`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.features[0].properties.city);
        setCity(res.data.features[0].properties.city);
      })
      .catch((err) => {
        console.log("err:",err);
      });
  }
  useEffect(() => {
    getDataLocation(latitude,longitude);
    
  }, [latitude, longitude]);
  

  const findWeather=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=870a4d4e2d4f5b6fe6e4950b5c562ca5`)
    .then(res=>{
      // console.log(res.data.main.temp)
      const k=(res.data.main.temp)-273.15;
      console.log(k.toFixed(0))
      setTemp(k.toFixed(0))
    })
  }
  findWeather()
  
 
  return (
    <div>
    <div>
      {
        if({temp}<=25 && {temp}>=15){
          
        }
      }
    </div>
    <div>{temp}°C</div>
    </div>
  )
}

export default Weather

{/* https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6b84dcc2fc3441b19d2cb5a22499c07e
     https://api.openweathermap.org/data/2.5/weather?q=pune&appid=870a4d4e2d4f5b6fe6e4950b5c562ca5 */}
 