import { useState, useEffect } from 'react';
import { getWeatherData } from '../axios'
import Card from '../Card/Card'
import './Weather.css'

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState([])

  useEffect(() => {
    getWeatherData(23, 120, '').then(res => 
      setCurrentWeather([res.data.current])    
    )
  }, [])

  const transform = (tim) => {
    tim = new Date(tim * 1000)
    let Y = tim.getFullYear()
    let M = tim.getMonth() + 1
    let D = tim.getDay() + 1
    let h = tim.getHours()
    let m = tim.getMinutes()
    return `${Y}/${M}/${D} ${h}:${m}`
  }

  return (
    <div className="wrap">
      {
        (!currentWeather.length) ? (
          <h1>No Data Found</h1>
        ) : (
          currentWeather.map((item, index) => (
            <div key={index} className="cards-wrap">
              <Card data={transform(item.dt)} title="現在時間"/>
              <Card data={transform(item.sunrise)} title="日出時間"/>
              <Card data={transform(item.sunset)} title="日落時間"/>
              <Card data={`${item.temp }°C`} title="溫度"/>
              <Card data={`${item.feels_like }°C`} title="體感溫度"/>
              <Card data={`${item.pressure }hPa`} title="氣壓"/>
              <Card data={`${item.humidity }%`} title="濕度"/>
              <Card data={`${item.dew_point }°C`} title="露點"/>
              <Card data={`${item.uvi }`} title="uvi"/>
              <Card data={`${item.clouds}%`} title="雲量"/>
              <Card data={`${item.visibility/1000}km`} title="能見度"/>
              <Card data={`${item.wind_speed}m/s`} title="風速"/>
              <Card data={`${item.wind_deg}°`} title="風向"/>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Weather