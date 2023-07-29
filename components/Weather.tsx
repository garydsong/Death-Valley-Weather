import React from 'react'
import { fetchWeather } from '@/utils'


export default async function Weather() {
    const weather = await fetchWeather()

    console.log(weather)
    return (
        <div className="absolute z-50 font-dm-sans">
            <div className="text-6xl font-extrabold">{weather.location.name}</div>
            <div className="font-bold ">{weather.location.region.toUpperCase()}</div>
            <div>{weather.current.condition.text}</div>
            <div>{weather.current.temp_f}° F</div>
            <div>{weather.current.temp_c}° C</div>
        </div>
    )
}
