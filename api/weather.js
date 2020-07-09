import {
  getWeatherWithLocation,
  getWeatherWithLocationMocks,
} from '../functions/weather'
import { ClientRequest, ServerResponse } from 'http'

/**
 * @param {ClientRequest} req
 * @param {ServerResponse} res
 */
export default function (req, res) {
  // const { lat, lon } = req.query

  // if (!lat || !lon) {
  //   return res.status(400).end()
  // }

  // Production
  // const weatherWithLocation = await getWeatherWithLocation(lat, lon)
  // Mocks

  const weatherWithLocation = getWeatherWithLocationMocks()

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  return res.status(200).send(weatherWithLocation)
}
