import  MovieList  from 'components/MovieList/MovieList';
import { useTrendingMovies } from 'hooks/useTrendingMovies';

 const HomeView = () => {
  const trendingMovies = useTrendingMovies()
 
  return (
    <>
      <h2 className='trendingMovies'>Trending today</h2>
      {trendingMovies && (
       <MovieList items={trendingMovies} />
      )}
    </>
  );
};

export default HomeView