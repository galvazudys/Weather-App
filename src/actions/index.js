import API_KEY from './api';
import axios from 'axios';

const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`

    //returns promise
    const request = axios.get(url);

    return {type: FETCH_WEATHER, payload: request};

}