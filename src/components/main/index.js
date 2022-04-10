import {
  MainContainer,
  Container,
  Forecast,
  Item,
  Highlights,
  Card,
  Wind,
} from './styles'
import { ButtonContainer } from 'components/button/styles'
import Button from 'components/button'
import Weather from 'components/weather'
import { MdAssistantNavigation } from 'react-icons/md'
import ProgressBar from 'components/progressBar'
import { useWeather } from 'hooks/useWeather'
import Loader from 'components/loader/loader'
import moment from 'moment'

const Main = () => {
  const { current, loading, degreeValue, setCelsius, setFahrenheit } =
    useWeather()
  return (
    <MainContainer>
      <Container>
        <ButtonContainer justify="flex-end">
          <Button
            weight="700"
            style="rounded"
            isActive={degreeValue === 'c'}
            onClick={setCelsius}
          >
            °C
          </Button>
          <Button
            weight="700"
            style="rounded"
            isActive={degreeValue === 'f'}
            onClick={setFahrenheit}
          >
            °F
          </Button>
        </ButtonContainer>
        <Forecast>
          {current.forecast?.map((e, i) => (
            <Item key={i}>
              <h3>{moment(e.date).format('dddd')}</h3>
              <Weather current={e.day.condition.code} />
              <p>
                {Math.round(e.day[`mintemp_${degreeValue}`])}°{degreeValue}
              </p>
              <p>
                {Math.round(e.day[`maxtemp_${degreeValue}`])}°{degreeValue}
              </p>
              {loading && <Loader />}
            </Item>
          ))}
        </Forecast>
        <Highlights>
          <h2>Today’s Highlights</h2>
          <Card>
            <h3>Wind status</h3>
            <p>
              <span>{current.wind.velocity}</span> km/h
            </p>
            <Wind degrees={current.wind.degrees}>
              <MdAssistantNavigation />
              {current.wind.direction}
            </Wind>
            {loading && <Loader />}
          </Card>
          <Card>
            <h3>Humidity</h3>
            <p>
              <span>{current.humidity}</span>%
            </p>
            <ProgressBar width={current.humidity} />
            {loading && <Loader />}
          </Card>
          <Card>
            <h3>Visibility</h3>
            <p>
              <span>{current.visibility}</span> km
            </p>
            {loading && <Loader />}
          </Card>
          <Card>
            <h3>Air Pressure</h3>
            <p>
              <span>{current.pressure}</span> mb
            </p>
            {loading && <Loader />}
          </Card>
        </Highlights>
      </Container>
    </MainContainer>
  )
}

export default Main
