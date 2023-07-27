import React from 'react';
import styled from 'styled-components';

const WeatherLogo=styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`;
const ChooseCityLabel=styled.span`
margin-top: 10px;
font-size: 18px;
font-weight: bold;
margin:10px auto;
`;
const SearchBox=styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 2px;
  margin: 20px auto;
  color: black;
   & input{
         padding: 10px;
         font-size: 14px;
         border: none;
         outline: none;
         font-weight: bold;
   }

   & button{
    border: none;
    color: white;
    font-weight: bold;
    background-color: black;
    cursor: pointer;
    outline: none;
   }
   & button:hover{
    background-color: yellow;
    color: red;
    font-weight: bold;
   }
  
`;

const CityComponent = (props) => {
    const {updateCity,fetchWeather}=props;
    return (
         <>
                <WeatherLogo src="/icons/perfect-day.svg"></WeatherLogo>          
                <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
                <SearchBox onSubmit={fetchWeather}>
                    <input type="text" placeholder='city..' onChange={(e)=>updateCity(e.target.value)} />
                   <button type='submit'>Serach</button>
                </SearchBox>
         </>
    );
}

export default CityComponent;
