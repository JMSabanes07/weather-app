import { LoaderContainer } from './styles'
import { SpinnerCircular } from 'spinners-react'

const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerCircular size={100} color="#000000" />
    </LoaderContainer>
  )
}

export default Loader
