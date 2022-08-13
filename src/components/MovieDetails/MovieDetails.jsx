import {
  MovieDescription,
  DescriptionInfo,
  Poster,
  Title,
  UserScore,
  OverviewTitle,
  GoBackButton,
  Overview,
} from './MovieDetails.styled';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { IMG_URL } from 'components/Services/FetchAPI';
import { CastReviews } from 'components/CastReviews/CastReviews';
import { useNavigate } from 'react-router-dom';

const MoviesDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      {movie && (
        <>
          <GoBackButton onClick={goBack}></GoBackButton>
          <MovieDescription>
            <Poster src={`${IMG_URL}${movie.poster_path}` } alt="" />
            <DescriptionInfo>
              <Title>
                {movie.title} ({movie.release_date})
              </Title>
              <UserScore>{`User Score ${Math.round(
                movie.vote_average * 10
              )}% `}</UserScore>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview> {movie.overview}</Overview>
            </DescriptionInfo>
          </MovieDescription>
          <CastReviews />
        </>
      )}
    </>
  );
};

export default MoviesDetails;
