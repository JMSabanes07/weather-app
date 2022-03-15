import { createContext, useState } from 'react'

export const WeatherContext = createContext()

export const WeatherCtx = ({ children }) => {
  const [location, setLocation] = useState()
  const [degreeValue, setDegreeValue] = useState('c')
  const [loading, setLoading] = useState(true)

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        loading,
        setLoading,
        degreeValue,
        setDegreeValue,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
