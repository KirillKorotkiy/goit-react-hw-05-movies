import { useFetchReviews } from 'hooks/useFetchReviews';
import { ReviewItem, Author,NoReviews } from './Reviews.styled';

export const Reviews = () => {
  const reviews = useFetchReviews();
  return (
    <>
      {!reviews && <h2>Loading ...</h2>}
      {reviews.length === 0 && <NoReviews>There is no reviews yet</NoReviews>}
      {reviews && (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <ReviewItem key={id}>
              <Author>{author}</Author>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ul>
      )}
    </>
  );
};
