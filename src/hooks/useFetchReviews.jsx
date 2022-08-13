import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewsById } from "components/Services/FetchAPI";

export const useFetchReviews =()=>{
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    
  
    useEffect(() => {
        fetchReviewsById(movieId).then(setReviews);
     
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

return reviews ? reviews : ''
}