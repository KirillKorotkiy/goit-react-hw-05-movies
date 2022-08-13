import MoviesDetails from 'components/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';
import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';

 const MoviesDetailsView = () => {
  return (
    <Wrapper>
      <MoviesDetails />
        <Outlet />
    </Wrapper>
  );
};

export default MoviesDetailsView