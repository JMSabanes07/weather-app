import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: grid;
  place-content: center;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.bg.primary};
`
