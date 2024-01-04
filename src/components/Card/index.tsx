import CardContainer from "./styles";
import DailyWeatherCard from "../DailyWeatherCard";
import { useEffect, useState } from "react";
import axios from "axios";

const APK = "306b6d7b24b76e33e8ddebffb2d91d72";

const Card = (): JSX.Element => {
  const [fiveDaysWeather, setFiveDaysWeather] = useState<any[]>([]);
  const [actualWeather, setActualWeather] = useState<any>({});
  const [isLocationChange, setIsLocationChange] = useState(true);
  const [currentLocation, setCurrentLocation] = useState("Local");
  const locations = ["Local", "Rosario", "Buenos Aires", "Cordoba", "Mendoza"];

  const filterArrayByDate = (data: any) => {
    const unique = data.data.list.filter(
      (obj: any, index: any) =>
        data.data.list.findIndex(
          (item: any) => item.dt_txt.slice(0, 10) === obj.dt_txt.slice(0, 10)
        ) === index
    );
    setFiveDaysWeather(unique);
  };

  const getCurrentLocationWeather = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    const a = await axios.get(`http://ip-api.com/json/${res.data.ip}`);
    const c = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        a.data.city
      }&appid=${APK}&units=${"metric"}&cnt=39`
    );
    const b = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        a.data.city
      }&appid=${APK}&units=${"metric"}`
    );
    filterArrayByDate(c);
    setActualWeather(b.data);
    setCurrentLocation(a.data.city);
  };

  const getSelectedLocationWeather = async (location: string) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APK}&units=${"metric"}&cnt=39`
    );
    const b = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APK}&units=${"metric"}`
    );
    filterArrayByDate(res);
    setActualWeather(b.data);
  };

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getActualDate = () => {
    const date = new Date();
    return date.toDateString().slice(3, 15);
  };

  const onChangeLocation = () => {
    setIsLocationChange((prev) => !prev);
  };

  const onSetNewLocation = (location: string) => {
    if (location === "Local") {
      getCurrentLocationWeather();
    } else {
      getSelectedLocationWeather(location);
      setCurrentLocation(location);
    }
  };

  return (
    <CardContainer>
      <div className="left-side-container">
        {actualWeather.weather ? (
          <>
            <div className="date-container">
              <h2>Today</h2>
              <span className="dayname">{getActualDate()}</span>
              <span className="datetime">
                {currentLocation === "Local" ? "-" : currentLocation}
              </span>
            </div>
            <div className="weather-container">
              <h1 className="weather-temp">
                {Math.trunc(actualWeather.main.temp)}°C
              </h1>
              <h3 className="weather-desc">{actualWeather.weather[0].main}</h3>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="right-side-container">
        <div className="five-days-weather-container">
          {fiveDaysWeather ? (
            fiveDaysWeather.map((d) => {
              return (
                <DailyWeatherCard
                  date={d.dt_txt}
                  sky={d.weather[0].main}
                  temp={d.main.temp}
                  key={d.dt_txt}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className="location-selector-container">
          {isLocationChange ? (
            <button onClick={() => onChangeLocation()}>Change location</button>
          ) : (
            locations.map((l) => {
              return (
                <button onClick={() => onSetNewLocation(l)} key={l}>
                  {l}
                </button>
              );
            })
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
