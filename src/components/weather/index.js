import { WeatherImage } from './styles'
const Weather = ({ current }) => {
  return <WeatherImage src={`/assets/${current}.png`} alt="" />
}

export default Weather
