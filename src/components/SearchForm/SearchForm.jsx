import { SearchWrapper, Input, Button, Form } from './SearchForm.styled';
import { useState } from 'react';

export const SearchFomr = ({onSubmit, postQuery, }) => {
  const [search, setSearch] = useState(postQuery)
  
  return (
    <SearchWrapper>
      <Form autoComplete="off" onSubmit={onSubmit}> 
        <Input type="search" name="search"
        value={search ? search: ''} onChange={e => {setSearch(e.target.value)}}
        placeholder="Search movies" />
        <Button type="submit">Search</Button>
      </Form>
    </SearchWrapper>
  );
};
