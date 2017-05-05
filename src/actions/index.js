import axios from 'axios';

const API_KEY = config.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},lt`;

    //returns promise
    const request = axios.get(url);

    return {type: FETCH_WEATHER, payload: request};

}