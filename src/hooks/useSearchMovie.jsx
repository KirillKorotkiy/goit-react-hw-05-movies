import { useState, useEffect } from "react";
import { fetchSearchMovie } from 'components/Services/FetchAPI';
import { useSearchParams } from 'react-router-dom';

export const useSearchMovie = ()=>{
    const [posts, setPost] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('query');
  
    useEffect(() => {
      if (postQuery) {
        fetchSearchMovie(postQuery).then(data => setPost(data));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);
  
    const handSubmit = e => {
      e.preventDefault();
      const query = e.target.search.value;
      setSearchParams({ query: query });
    };

    return {posts, postQuery, handSubmit}
}