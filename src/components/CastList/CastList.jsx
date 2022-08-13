import { useFetchCastMovie } from 'hooks/useFetchCastMovie';
import { CastCard } from 'components/CastCard/CastCard';
import { ActorsList } from './CastList.styled';

export const CastList = () => {
  const cast = useFetchCastMovie();
  return (
    <>
      {cast && (
        <ActorsList>
          <CastCard cast={cast} />
        </ActorsList>
      )}
    </>
  );
};
