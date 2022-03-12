import styled, { css } from 'styled-components'

export const Default = styled.button`
  border: none;
  padding: 11px 18px;
  background: ${({ theme, highlight, bgNone }) => {
    return highlight
      ? theme.button.highlight
      : bgNone
      ? 'none'
      : theme.button.primary
  }};
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  font-weight: ${({ weight }) => weight || 500};
  cursor: pointer;
  transition: 0.1s;
  :hover {
    background: ${({ theme, highlight, bgNone }) => {
      return highlight
        ? theme.button.primary
        : bgNone
        ? 'none'
        : theme.button.highlight
    }};
  }
  svg {
    font-size: ${({ bgNone }) => (bgNone ? '2rem' : '1rem')};
  }
`

export const Rounded = styled(Default)`
  display: grid;
  place-content: center;
  border-radius: 50%;
  padding: 0;
  ${({ bgNone }) => {
    return (
      !bgNone &&
      css`
        width: 40px;
        height: 40px;
      `
    )
  }};
  svg {
    ${({ bgNone }) => {
      return (
        !bgNone &&
        css`
          width: 22px;
          height: 22px;
        `
      )
    }};
  }
`
export const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-content: center;

  height: fit-content;
  width: 100%;
  position: relative;
  z-index: 1;
`
