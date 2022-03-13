import {
  MainContainer,
  Container,
  Forecast,
  Item,
  Hightlights,
  Card,
  Wind,
} from './styles'
import { ButtonContainer } from 'components/button/styles'
import Button from 'components/button'
import Weather from 'components/weather'
import { MdAssistantNavigation } from 'react-icons/md'
import ProgressBar from 'components/progressBar'
import { useWeather } from 'hooks/useWeather'

const Main = () => {
  const { current } = useWeather()
  return (
    <MainContainer>
      <Container>
        <ButtonContainer justify="flex-end">
          <Button weight="700" style="rounded">
            °C
          </Button>
          <Button weight="700" style="rounded">
            °F
          </Button>
        </ButtonContainer>
        <Forecast>
          {current.forecast?.map((e, i) => (
            <Item key={i}>
              <h3>{e.date}</h3>
              <Weather current={e.day.condition.code} />
              <p>{Math.round(e.day.mintemp_c)}°C</p>
              <p>{Math.round(e.day.maxtemp_c)}°C</p>
            </Item>
          ))}
        </Forecast>
        <Hightlights>
          <h2>Today’s Hightlights</h2>
          <Card>
            <h3>Wind status</h3>
            <p>
              <span>{current.wind.velocity}</span> km/h
            </p>
            <Wind degrees={current.wind.degrees}>
              <MdAssistantNavigation />
              {current.wind.direction}
            </Wind>
          </Card>
          <Card>
            <h3>Humidity</h3>
            <p>
              <span>{current.humidity}</span>%
            </p>
            <ProgressBar width={current.humidity} />
          </Card>
          <Card>
            <h3>Visibility</h3>
            <p>
              <span>{current.visibility}</span> km
            </p>
          </Card>
          <Card>
            <h3>Air Pressure</h3>
            <p>
              <span>{current.pressure}</span> mb
            </p>
          </Card>
        </Hightlights>
      </Container>
    </MainContainer>
  )
}

export default Main
