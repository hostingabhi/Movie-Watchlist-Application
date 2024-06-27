import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { rateMovie} from '../features/movies/moviesSlice';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Use parseInt to ensure the ID is treated as a number
  const movie = useSelector((state) => state.movies.movies.find((movie) => movie.id === parseInt(id)));

  const [rating, setRating] = useState(movie ? movie.rating : 0);
  const [reviewInput, setReviewInput] = useState('');

  useEffect(() => {
    if (movie) {
      setRating(movie.rating);
    }
  }, [movie]);

  const handleRating = (newRating) => {
    setRating(newRating);
    dispatch(rateMovie({ id: parseInt(id), rating: newRating }));
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details container">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>

      <div className="rating">
        <h3>Rate this movie:</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? 'rated' : ''}`}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="review">
        <h3>Reviews:</h3>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map((review, index) => (
            <div key={index} className="review-item">
              <p>{review}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        )}

        <textarea
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
          placeholder="Write your review here..."
        ></textarea>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
