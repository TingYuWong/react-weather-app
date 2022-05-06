import axios from 'axios'

let baseURL = 'https://api.openweathermap.org/data/2.5/onecall'
// ?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

export function getWeatherData(lat: number, lon: number, range: string) {
    let params = {
        lat,
        lon,
        exclude: range,
        appid: '38771f27e9aaf528e83b2ebf0c783fc4',
        units: 'metric'
    }
    return axios.get(baseURL, { params })
}
