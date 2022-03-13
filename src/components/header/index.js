import {
  HeaderContainer,
  WeatherContainer,
  CloudBackground,
  CurrentInfo,
  Degrees,
  Weather,
  DateTime,
  Location,
} from './styles'
import Button from 'components/button'
import { ButtonContainer } from 'components/button/styles'
import { MdMyLocation, MdLocationPin } from 'react-icons/md'
import WeatherImage from 'components/weather'
import Search from 'components/search'
import { useActive } from 'hooks/useActive'
import { useWeather } from 'hooks/useWeather'

const Text = ({ render, loading }) => {
  return <>{loading ? 'loading..' : render}</>
}

const Header = () => {
  const { activate, deactivate, isActive } = useActive()
  const { current, loading, getLocation } = useWeather()

  return (
    <HeaderContainer>
      <ButtonContainer justify="space-between">
        <Button onClick={activate}>Search for places</Button>
        <Button style="rounded" onClick={() => getLocation()}>
          <MdMyLocation />
        </Button>
      </ButtonContainer>
      <WeatherContainer>
        <WeatherImage current={current.condition.code} />
        <CloudBackground src="/assets/Cloud-background.png" alt="" />
      </WeatherContainer>
      <CurrentInfo>
        <Degrees>
          <Text loading={loading} render={current.degrees()} />
          <span>°C</span>
        </Degrees>
        <Weather>
          <Text loading={loading} render={current.condition.text} />
        </Weather>
        <DateTime>
          <span>Today</span>
          <span>•</span>
          <span>Fri, 5 Jun</span>
        </DateTime>
        <Location>
          <MdLocationPin />
          <p>
            <Text loading={loading} render={current.location} />
          </p>
        </Location>
      </CurrentInfo>
      <Search isOpen={isActive} handleClose={deactivate} />
    </HeaderContainer>
  )
}

export default Header
