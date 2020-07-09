import axios from 'axios'
import querystring from 'querystring'
import * as dotenv from 'dotenv'
import mocks from '../mocks/weather.json'

dotenv.config()

export async function getWeatherWithLocation(lat, lon) {
  try {
    const { data } = await axios.get(
      process.env.API_BASE_URL +
        '?' +
        querystring.stringify({
          lat,
          lon,
          appid: process.env.API_KEY,
        })
    )

    return data
  } catch (error) {
    return error
  }
}

/** MOCKS */

export function getWeatherWithLocationMocks() {
  return mocks
}
