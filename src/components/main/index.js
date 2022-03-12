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

const Main = () => {
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
          <Item>
            <h3>Tomorrow</h3>
            <Weather current="Hail" />
            <p>11°C</p>
            <p>16°C</p>
          </Item>
          <Item>
            <h3>Tomorrow</h3>
            <Weather current="HeavyCloud" />
            <p>11°C</p>
            <p>16°C</p>
          </Item>
          <Item>
            <h3>Tomorrow</h3>
            <Weather current="LightRain" />
            <p>11°C</p>
            <p>16°C</p>
          </Item>
          <Item>
            <h3>Tomorrow</h3>
            <Weather current="Sleet" />
            <p>11°C</p>
            <p>16°C</p>
          </Item>
          <Item>
            <h3>Tomorrow</h3>
            <Weather current="LightCloud" />
            <p>11°C</p>
            <p>16°C</p>
          </Item>
        </Forecast>
        <Hightlights>
          <h2>Today’s Hightlights</h2>
          <Card>
            <h3>Wind status</h3>
            <p>
              <span>7</span>mph
            </p>
            <Wind>
              <MdAssistantNavigation />
              wsw
            </Wind>
          </Card>
          <Card>
            <h3>Humidity</h3>
            <p>
              <span>84</span>%
            </p>
            <ProgressBar />
          </Card>
          <Card>
            <h3>Visibility</h3>
            <p>
              <span>6,4</span> miles
            </p>
          </Card>
          <Card>
            <h3>Air Pressure</h3>
            <p>
              <span>998</span> mb
            </p>
          </Card>
        </Hightlights>
      </Container>
    </MainContainer>
  )
}

export default Main
