import React from 'react'
const apiKey = "e1717085edb84ced802203246232807"
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Death Valley&days=1&aqi=no&alerts=no`
const moment = require('moment-timezone');

export default async function Weather() {
    async function fetchWeather() {
        const response = await fetch(url)
        const result = await response.json()

        return result
    }

    const currentHour: string = moment.tz("America/Los_Angeles").format('HH');

    const weather: object = await fetchWeather()
    console.log(weather)

    return (
        <div className="absolute z-50 font-dm-sans">
            <div className="text-6xl font-extrabold">{weather.location.name}
            </div>
            <div className="font-bold">{weather.location.region.toUpperCase()}</div>
            <div>
                {weather.current.condition.text}
            </div>
            <div>{weather.current.temp_f}° F</div>
            <div>{weather.current.temp_c}° C</div>
        </div>
    )
}
