
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


    const weather: object = await fetchWeather()

    const currentHour: string = moment.tz("America/Tijuana").format('HH');

    const currentDate: string = moment.tz("America/Tijuana").format('YYYY-MM-DD');

    const currentTime: string = moment.tz("America/Tijuana").format('HH:mm');

    let fcSwitch = true;

    console.log(weather)


    console.log(fcSwitch)
    return (
        <div className="absolute z-50 font-dm-sans z-10">
            <div className="flex flex-col items-center">

                <div className="text-5xl font-extrabold">
                    {fcSwitch
                        ? (<div className="flex">{weather.current.temp_f}°
                        <div>F</div>
                        /
                        <div>C</div>
                        </div>)
                        : (<div className="flex">{weather.current.temp_c}°
                        <div>F</div>
                        /
                        <div>C</div>
                        </div>)
                    }
                </div>
                <div className="text-6xl font-extrabold">{weather.location.name}
                </div>
                <div className="relative font-bold -top-2">
                    {weather.location.region.toUpperCase()}</div>
                <div>
                    {weather.current.condition.text} / {currentDate} / {currentTime}
                </div>
            </div>



        </div>
    )
}
