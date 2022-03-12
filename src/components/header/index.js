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

const Header = () => {
  const { activate, deactivate, isActive } = useActive()

  return (
    <HeaderContainer>
      <ButtonContainer justify="space-between">
        <Button onClick={activate}>Search for places</Button>
        <Button style="rounded">
          <MdMyLocation />
        </Button>
      </ButtonContainer>
      <WeatherContainer>
        <WeatherImage current="thunderstorm" />
        <CloudBackground src="/assets/Cloud-background.png" alt="" />
      </WeatherContainer>
      <CurrentInfo>
        <Degrees>
          15<span>°C</span>
        </Degrees>
        <Weather>Shower</Weather>
        <DateTime>
          <span>Today</span>
          <span>•</span>
          <span>Fri, 5 Jun</span>
        </DateTime>
        <Location>
          <MdLocationPin />
          <p>Helsinki</p>
        </Location>
      </CurrentInfo>
      <Search isOpen={isActive} handleClose={deactivate} />
    </HeaderContainer>
  )
}

export default Header
