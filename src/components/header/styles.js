import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-rows: auto auto 1fr;

  background: ${({ theme }) => theme.bg.primary};
  padding: 1rem;
  overflow: hidden;
  position: relative;
  height: 100vh;
  @media (min-width: ${({ theme }) => theme.media.l}) {
    width: 320px;
    padding: 3rem;
    position: fixed;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    width: 450px;
  }
`

export const WeatherContainer = styled.div`
  display: grid;
  place-content: center;
  place-items: center;

  position: relative;
  padding-top: 4rem;
  padding-bottom: 2rem;
  @media (min-width: ${({ theme }) => theme.media.l}) {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
`

export const CloudBackground = styled.img`
  position: absolute;
  width: 160%;
  filter: opacity(0.2);
  z-index: 0;
`

export const CurrentInfo = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  justify-items: center;
  gap: 2rem;

  padding-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme.media.l}) {
    padding: 0;
  }
`

export const Degrees = styled.p`
  font-size: 8rem;
  font-weight: 500;
  span {
    font-size: 3rem;
    font-weight: 400;
  }
`
export const Weather = styled.p`
  align-self: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
`

export const DateTime = styled.p`
  display: grid;
  grid-auto-flow: column;
  gap: 0.7rem;

  font-weight: 500;
  span {
    color: ${({ theme }) => theme.text.secondary};
  }
`

export const Location = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  p {
    color: ${({ theme }) => theme.text.secondary};
  }
  svg {
    font-size: 1.5rem;
  }
`
