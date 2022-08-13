import { useState, useEffect } from 'react';
import { fetchCastList } from 'components/Services/FetchAPI';
import { useParams } from 'react-router-dom';

export const useFetchCastMovie = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCastList(movieId).then(setCast);
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return cast;
};
