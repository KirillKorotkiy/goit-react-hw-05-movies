import { useState, useEffect } from 'react';
import { fetchAPI } from 'components/Services/FetchAPI';


export const useTrendingMovies = () =>{
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
      fetchAPI().then(setTrendingMovies);
    }, []);
   
 return trendingMovies
}
