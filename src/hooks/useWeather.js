import { useState, useContext } from 'react'
import { WeatherContext } from 'contexts/weatherContext'

export const useWeather = () => {
  // prettier-ignore
  const { 
    location, 
    setLocation, 
    loading, 
    setLoading,
    degreeValue,
    setDegreeValue
  } = useContext(WeatherContext)

  const [cities, setCities] = useState([])

  /**
   * Callback for save data to an state.
   *
   * @callback setState
   * @param {*} any
   */

  /**
   * Get data for weatherapi.com
   *
   * @param {string} method Methods: current | forecast | search | history | future | timezone | sports | astronomy | ip
   * @param {string} q Query for the api
   * @param {setState} callback A callback for save data to an state.
   */
  const fetcher = async (method, q, callback, loader = true) => {
    loader && setLoading(true)
    const result = await fetch(
      `${process.env.API_ENDPOINT}/${method}.json?key=${process.env.WEATHER_KEY}&q=${q}&days=3`
    )
    const data = await result.json()
    if (data?.error) return setLoading(false)
    callback(data)

    localStorage.setItem('city', data?.location?.name)
    loader && setLoading(false)
  }

  const getLocation = async (city = false) => {
    if (city) return fetcher('forecast', city, setLocation)

    const success = async (e) => {
      const { latitude, longitude } = e.coords
      await fetcher('forecast', `${latitude}, ${longitude}`, setLocation)
    }

    const error = (e) => {
      console.warn(`Error ${e}`)
      setLoading(false)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  const degrees = () => {
    if (location?.current) {
      return {
        value: Math.round(location?.current[`temp_${degreeValue}`]),
        type: degreeValue,
      }
    }
  }

  const setCelsius = () => {
    setDegreeValue('c')
  }

  const setFahrenheit = () => {
    setDegreeValue('f')
  }

  const clearCities = () => {
    setCities([])
  }

  const searchCity = async (e) => {
    if (e.target.value.length > 0) {
      return fetcher('search', e.target.value, setCities, false)
    }
    clearCities()
  }

  const current = {
    degrees,
    condition: {
      text: location?.current?.condition.text,
      code: location?.current?.condition.code,
    },
    wind: {
      velocity: location?.current?.wind_kph,
      direction: location?.current?.wind_dir,
      degrees: location?.current?.wind_degree,
    },
    pressure: location?.current?.pressure_mb,
    humidity: location?.current?.humidity,
    visibility: location?.current?.vis_km,
    location: `${location?.location?.name}, ${location?.location?.region}, ${location?.location?.country}`,
    forecast: location?.forecast?.forecastday,
    localtime: location?.location?.localtime,
  }

  return {
    getLocation,
    current,
    loading,
    searchCity,
    cities,
    clearCities,
    degreeValue,
    setCelsius,
    setFahrenheit,
  }
}
