import { useState, useContext } from 'react'
import { GeoLocationContext } from 'contexts/geoLocation'

export const useWeather = () => {
  const { location, setLocation, loading, setLoading } =
    useContext(GeoLocationContext)
  const [cities, setCities] = useState()

  const getLocation = async (city = false) => {
    if (!city) {
      setLoading(true)
      const success = async (e) => {
        const result = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${e.coords.latitude},${e.coords.longitude}&days=3`
        )
        setLocation(await result.json())
        setLoading(false)
      }
      const error = (e) => {
        console.warn(`Error ${e}`)
        setLoading(false)
      }
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setLoading(true)
      const result = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${city}&days=3`
      )
      setLocation(await result.json())
      setLoading(false)
    }
  }

  const degrees = (temp = 'c') => {
    console.log(location)
    if (location?.current) {
      return Math.round(location?.current[`temp_${temp}`])
    }
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
    forecast: location?.forecast.forecastday,
  }

  const searchCity = async (e) => {
    const result = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_KEY}&q=${e.target.value}}`
    )
    setCities(await result.json())
  }

  return {
    getLocation,
    current,
    loading,
    searchCity,
    cities,
  }
}
