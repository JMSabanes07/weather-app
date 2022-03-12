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

const Search = ({ isOpen, handleClose }) => {
  return (
    <SearchContainer active={isOpen}>
      {console.log(process.env.WEATHER_KEY)}
      <Button className="close" style="rounded" bgNone onClick={handleClose}>
        <MdClose />
      </Button>
      <Form onSubmit={(e) => e.preventDefault()}>
        <InputContainer>
          <MdOutlineSearch />
          <Input type="text" placeholder="search location" />
        </InputContainer>
        <Button highlight>Search</Button>
      </Form>
      <List>
        <Item>
          London <MdChevronRight />
        </Item>
        <Item>
          Argentina <MdChevronRight />
        </Item>
        <Item>
          España <MdChevronRight />
        </Item>
      </List>
    </SearchContainer>
  )
}

export default Search
