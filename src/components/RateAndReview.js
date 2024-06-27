import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie, reviewMovie } from '../features/movies/moviesSlice';
import './RateAndReview.css';

const RateAndReview = ({ movieId, currentRating, currentReview }) => {
  const [rating, setRating] = useState(currentRating || 0);
  const [review, setReview] = useState(currentReview || '');
  const dispatch = useDispatch();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    dispatch(rateMovie({ id: movieId, rating: newRating }));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    dispatch(reviewMovie({ id: movieId, review }));
  };

  return (
    <div className="rate-review">
      <h3>Rate this Movie:</h3>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`}
            onClick={() => handleRatingChange(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <h3>Write a Review:</h3>
      <textarea
        value={review}
        onChange={handleReviewChange}
      ></textarea>
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default RateAndReview;
