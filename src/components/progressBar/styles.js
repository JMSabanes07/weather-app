import styled from 'styled-components'

export const BarContainer = styled.div`
  display: grid;
  width: 100%;
`
export const Bar = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.text.primary};
  height: 10px;
  position: relative;
  border-radius: 5px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.bg.yellow};
    width: ${({ width }) => width};
    max-width: 100%;
    height: 10px;
    border-radius: 5px;
    transition: 0.5s;
  }
`
export const Info = styled.div`
  display: grid;
  grid-auto-flow: column;
  font-size: 0.7rem;
  padding: 0.1rem;
`
export const Item = styled.div`
  justify-self: ${({ justify }) => justify};
`
