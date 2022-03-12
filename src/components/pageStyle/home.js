import styled from 'styled-components'

export const HomePage = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg.secondary};

  @media (min-width: ${({ theme }) => theme.media.l}) {
    grid-template-columns: 320px 1fr;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    grid-template-columns: 450px 1fr;
  }
`
