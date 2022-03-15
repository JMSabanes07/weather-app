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
import Loader from 'components/loader/loader'
import moment from 'moment'

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
          {current.degrees()?.value}
          <span>°{current.degrees()?.type}</span>
        </Degrees>
        <Weather>{current.condition.text}</Weather>
        <DateTime>
          <span>{moment(current.localtime).format('ddd D MMM')}</span>
          <span>•</span>
          <span>{moment(current.localtime).format('HH : mm')} hs</span>
        </DateTime>
        <Location>
          <MdLocationPin />
          <p>{current.location}</p>
        </Location>
      </CurrentInfo>
      <Search isOpen={isActive} handleClose={deactivate} />
      {loading && <Loader />}
    </HeaderContainer>
  )
}

export default Header
