"use client"
import React, {useState, useEffect} from 'react'
const apiKey = "e1717085edb84ced802203246232807"
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Death Valley&days=1&aqi=no&alerts=no`
const moment = require('moment-timezone');

export default function Weather() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [weather, setWeatherData] = useState(null)
    const [fcSwitch, setFCSwitch] = useState(true) // starts at true to default to F
    const [fade, setFade] = useState(false);

    // async code before implementation of useEffect
    // async function fetchWeather() {
    //     const response = await fetch(url)
    //     const result = await response.json()

    //     return result
    // }

    // const weather: object = await fetchWeather()

    // let fcSwitch = true;
    // const setFC = () => {
    //     fcSwitch ? fcSwitch = false : fcSwitch = true
    // }

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setWeatherData(data))
        .then(() => setIsLoaded(true))
    }, [])

    useEffect(() => {
        isLoaded ? setFade(true) : false
    }, [isLoaded, weather, fade])

    const currentHour: string = moment.tz("America/Tijuana").format('HH');
    const currentDate: string = moment.tz("America/Tijuana").format('YYYY-MM-DD');
    const currentTime: string = moment.tz("America/Tijuana").format('HH:mm');

    // console.log(weather)
    return isLoaded && (
        <div className="absolute z-50 font-dm-sans z-10 transition-opacity duration-1000">
            <div className={`flex flex-col items-center transition-all duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>

                <div className="text-5xl font-extrabold duration-500">
                    {fcSwitch
                        ? (<div className="flex">{weather.current.temp_f}°
                        <div>F</div>
                        /
                        <div className="cursor-pointer hover:text-gray-400 duration-1000" onClick={() => setFCSwitch(false)}>C</div>
                        </div>)
                        : (<div className="flex">{weather.current.temp_c}°
                        <div>C</div>
                        /
                        <div className="cursor-pointer hover:text-gray-400 duration-1000" onClick={() => setFCSwitch(true)}>F</div>
                        </div>)
                    }
                </div>
                <div className="text-6xl font-extrabold">{weather.location.name}
                </div>
                <div className="relative font-bold -top-2">
                    {weather.location.region.toUpperCase()}</div>
                <div>
                {console.log(weather.current.condition.text)}
                    {weather.current.condition.text} / {currentDate} / {currentTime}
                </div>
            </div>



        </div>
    )
}
