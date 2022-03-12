import { useState, useEffect, useContext } from 'react'

import { GeoLocationContext } from 'contexts/geoLocation'

export const useGeoLocation = () => {
  const { location, setLocation } = useContext(GeoLocationContext)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (e) => {
        const result = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=dc2f9741146e49f2880195624221203&q=${e.coords.latitude},${e.coords.longitude}`
        )
        setLocation(await result.json())
      })
    }
  }, [])

  return {
    location,
    setLocation,
  }
}
