import styled from 'styled-components';
import { useState } from 'react';
import './App.css'
import React from 'react';
import CityinfoComponent from './module/CityinfoComponent';
import axios from 'axios';
import WeatherinfoComponent from './module/WeatherInfoComponent';



const Cointainer=styled.div`
 display:flex;
 flex-direction:column;
 margin:auto;
 /* align-items:center; */
 box-shadow: 0 3px 6px #555;
 padding:30px 20px;
 border-radius:4px;
 width: 380px;
 /* width: 100%; */
 background-color: white;
 font-family: 🇲🇸;

`;

const CityComponent=styled.div`
 display:flex;
 flex-direction:column;
 font-size: 2rem;

 
`;

const WeatherComponent=styled.div`
 display:flex;
 flex-direction:column;
`;

const Applabel=styled.span`
display: flex;
flex-direction: row ;
font-size: 20px;
font-weight: bold;
justify-content: center;
`;

const App = () => {
  const [city,updateCity]=useState();
  const [weather,updateWeather]=useState();

  const fetchWeather=async(e)=>{
    e.preventDefault();
   const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
   updateWeather(response.data);
   console.log(response)
  }
  return (
    <Cointainer>
      <Applabel>React Weather App</Applabel>
   
            { weather ? (<WeatherinfoComponent weather={weather}/>
            
            ): (<CityinfoComponent updateCity={updateCity} fetchWeather={fetchWeather}/>)}

    </Cointainer>
  )
}

export default App;
