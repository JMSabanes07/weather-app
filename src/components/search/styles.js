import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;

  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg.primary};
  position: absolute;
  z-index: 1;
  padding: 1rem;
  left: ${({ active }) => (active ? '0' : '-100%')};
  transition: 0.2s;
  .close {
    justify-self: flex-end;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    padding: 3rem;
  }
`

export const Form = styled.form`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  position: relative;
  width: 100%;
  svg {
    left: 1rem;
    position: absolute;
    font-size: 1.6rem;
    fill: ${({ theme }) => theme.text.secondary};
  }
`

export const InputContainer = styled.div`
  display: grid;
  align-items: center;
`

export const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 1rem 1rem 3.5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.border.primary};
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`

export const List = styled.ul`
  display: grid;
  gap: 1rem;

  height: 100%;
  overflow-y: auto;
`
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.1s;
  svg {
    opacity: 0;
    font-size: 1.3rem;
    fill: ${({ theme }) => theme.text.secondary};
    transition: 0.1s;
    transform: translateX(-30px);
  }
  :hover {
    border: 1px solid ${({ theme }) => theme.border.secondary};
    svg {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
