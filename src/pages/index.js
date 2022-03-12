import { useEffect } from 'react'
import Header from 'components/header'
import Main from 'components/main'
import { HomePage } from 'components/pageStyle/home'
import { useGeoLocation } from 'hooks/useGeoLocation'

const Home = () => {
  const { location } = useGeoLocation()
  useEffect(() => {
    console.log(location?.location)
  }, [location])
  return (
    <HomePage>
      <Header />
      <Main />
    </HomePage>
  )
}

export default Home
