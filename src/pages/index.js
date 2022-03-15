import { useEffect } from 'react'
import Header from 'components/header'
import Main from 'components/main'
import { HomePage } from 'components/pageStyle/home'
import { useWeather } from 'hooks/useWeather'

const Home = () => {
  const { getLocation } = useWeather()

  useEffect(() => {
    const city = localStorage.getItem('city')
    city ? getLocation(city) : getLocation()
  }, [])

  return (
    <HomePage>
      <Header />
      <Main />
    </HomePage>
  )
}

export default Home
