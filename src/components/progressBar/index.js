import { Bar, BarContainer, Info, Item } from './styles'

const ProgressBar = ({ width }) => {
  return (
    <BarContainer>
      <Info>
        <Item justify="flex-start">0</Item>
        <Item justify="center">50</Item>
        <Item justify="flex-end">100</Item>
      </Info>
      <Bar width={`${width}%`} />
      <Info>
        <Item justify="flex-end">%</Item>
      </Info>
    </BarContainer>
  )
}

export default ProgressBar
