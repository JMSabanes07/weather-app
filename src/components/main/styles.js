import styled from 'styled-components'
import { WeatherImage } from 'components/weather/styles'
import { ButtonContainer } from 'components/button/styles'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(auto, 700px);
  justify-content: center;

  padding: 3rem 1rem;
  width: 100%;
  ${ButtonContainer} {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.media.s}) {
    ${ButtonContainer} {
      display: inherit;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.l}) {
    padding: 3rem;
    grid-column: 2/3;
  }
`

export const Container = styled.div`
  display: grid;
  align-content: flex-start;
  gap: 3.5rem;

  width: 100%;
  height: 100%;
`

export const Forecast = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (min-width: ${({ theme }) => theme.media.s}) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  align-items: center;

  padding: 1rem;
  background: ${({ theme }) => theme.bg.primary};
  height: 177px;
  h3 {
    grid-column: 1/3;
    font-size: 1rem;
    font-weight: 500;
  }
  ${WeatherImage} {
    grid-column: 1/3;
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    object-position: center;
  }
  p {
    width: fit-content;
    font-size: 1rem;
    font-weight: 500;
  }
`

export const Hightlights = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.media.s}) {
    grid-template-columns: 1fr 1fr;
    h2 {
      grid-column: 1/3;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.l}) {
    gap: 2.5rem;
  }
`

export const Card = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.5rem;

  padding: 2rem;
  background: ${({ theme }) => theme.bg.primary};
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    font-size: 2rem;
    font-weight: 500;
    span {
      font-size: 4rem;
      font-weight: 700;
    }
  }
`

export const Wind = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.3rem;
  font-weight: 400;
  width: fit-content;
  svg {
    border-radius: 50%;
    fill: ${({ theme }) => theme.text.secondary};
    font-size: 2rem;
  }
`
