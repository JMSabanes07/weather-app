import { useRef } from 'react'
import {
  SearchContainer,
  Form,
  InputContainer,
  Input,
  List,
  Item,
} from './styles'
import { MdOutlineSearch, MdClose, MdChevronRight } from 'react-icons/md'
import Button from 'components/button'
import { useWeather } from 'hooks/useWeather'

const Search = ({ isOpen, handleClose }) => {
  const { searchCity, cities, clearCities, getLocation } = useWeather()
  const inputRef = useRef()

  const handleClick = (city) => {
    getLocation(city)
    inputRef.current.value = ''
    clearCities()
    handleClose()
  }

  return (
    <SearchContainer active={isOpen}>
      <Button className="close" style="rounded" bgNone onClick={handleClose}>
        <MdClose />
      </Button>
      <Form onSubmit={(e) => e.preventDefault()}>
        <InputContainer>
          <MdOutlineSearch />
          <Input
            ref={inputRef}
            type="text"
            placeholder="search location"
            onChange={searchCity}
          />
        </InputContainer>
      </Form>
      <List>
        {cities?.map((city, i) => (
          <Item key={i} onClick={() => handleClick(city.name)}>
            {city.name}, {city.region}, {city.country} <MdChevronRight />
          </Item>
        ))}
      </List>
    </SearchContainer>
  )
}

export default Search
