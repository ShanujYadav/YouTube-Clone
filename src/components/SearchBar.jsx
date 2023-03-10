import { useState } from 'react';
import {InputGroup,Form, Stack, Button }from 'react-bootstrap';
import Youtube from '../API/Youtube';

const SearchBar=({onSubmit})=>{

  const [search, setSearch]=useState('')

   return <InputGroup className="mt-3" >
<Form onSubmit={(e)=>{
  e.preventDefault()
  onSubmit(search)
  }}>
  <Stack direction="horizontal" gap={1}>
        <Form.Control
          placeholder="Search . . ."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e=> setSearch(e.target.value)}
          value={search}
          
        />
        <Button type='submit' id="basic-addon2">Search</Button>
        </Stack>
        </Form>
      </InputGroup>
  
}
export default SearchBar;