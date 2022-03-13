import { createContext, useState } from 'react'

export const GeoLocationContext = createContext()

export const GeoLocationCtx = ({ children }) => {
  const [location, setLocation] = useState()
  const [loading, setLoading] = useState(true)

  return (
    <GeoLocationContext.Provider
      value={{
        location,
        setLocation,
        loading,
        setLoading,
      }}
    >
      {children}
    </GeoLocationContext.Provider>
  )
}
