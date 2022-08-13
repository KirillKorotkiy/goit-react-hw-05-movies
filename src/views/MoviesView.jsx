import { Outlet } from 'react-router-dom';
import { SearchList } from 'components/SearchList/SearchList';
import { SearchFomr } from 'components/SearchForm/SearchForm';
import { useSearchMovie } from 'hooks/useSearchMovie';


 const MoviesView = () => {
const {postQuery, posts, handSubmit} = useSearchMovie()
  return (
    <>
      <SearchFomr onSubmit={handSubmit} postQuery={postQuery} />
      <SearchList posts={posts} />
      <Outlet />
    </>
  );
};

export default MoviesView