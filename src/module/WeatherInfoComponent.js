import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunrise: "/icons/temp.svg",
  wind: "/icons/wind.svg ",
  humidity: "/icons/humidity.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d":"/icons/sunny.svg",
  "01n":"/icons/night.svg",
  "02d":"/icons/day.svg",
  "02n":"/icons/cloudy-night.svg",
  "03d":"/icons/cloudy.svg",
  "03n":"/icons/cloudy.svg",
  "50d":"/icons/perfect-day.svg",
  "04n":"/icons/cloudy-night.svg",
  "09d":"/icons/rain.svg",
  "09n":"/icons/rain-night.svg",
  "10d":"/icons/rain.svg",
  "10n":"/icons/rain-night.svg",
  "11d":"/icons/storm.svg",
  "11n":"/icons/storm.svg",
};


const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-weight: bold;
  font-size: 16px;
  text-align: start;

  & span {
    font-size: 28px;
  }
`;

const Location = styled.span`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px auto;
`;

const WeatherInfoLabel = styled.span`
  display: flexbox;
  flex-direction: row;
  /* justify-content: center; */
  font-weight: bold;
  padding-left: 20px;
  margin: 10px;
  font-size: 18px;
  width: 100%;
  left: 20px;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  /* justify-content: center; */
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <>
      <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]} />
        <InfoLabel>
          {value}
          <span>{name}</span>
        </InfoLabel>
      </InfoContainer>
    </>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  /////////////////////////////////////
  const test=weather?.weather[0].icon;
  
  console.log(test)

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp-273)} °C`}</span> | {`${weather?.weather[0].description}`}
        </Condition>
       
        <WeatherLogo src={WeatherIcons[weather.weather[0].icon]}></WeatherLogo>

      </WeatherCondition>

      <Location>{`${weather?.name}, ${weather.sys.country}`}</Location>
      <WeatherInfoLabel>Weather info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name={isDay ? "sunrise" : "sunset"} value={
          getTime(weather?.sys[isDay?"sunset":"sunrise"])} />

        <WeatherInfoComponent name="humidity" value={weather.main.humidity} />
        <WeatherInfoComponent name="wind" value={weather.wind.speed} />
        <WeatherInfoComponent name="pressure" value={weather.main.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
