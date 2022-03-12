import { createContext, useState } from 'react'

export const GeoLocationContext = createContext()

export const GeoLocationCtx = ({ children }) => {
  const [location, setLocation] = useState()

  return (
    <GeoLocationContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {children}
    </GeoLocationContext.Provider>
  )
}
