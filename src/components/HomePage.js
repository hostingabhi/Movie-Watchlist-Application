import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWatched, deleteMovie, rateMovie, addReview } from '../features/movies/moviesSlice';
import './HomePage.css';

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const [rating, setRating] = useState({});
  const [review, setReview] = useState({});

  const handleRatingChange = (id, newRating) => {
    setRating((prevRating) => ({ ...prevRating, [id]: newRating }));
    dispatch(rateMovie({ id, rating: newRating }));
  };

  const handleReviewChange = (id, newReview) => {
    setReview((prevReview) => ({ ...prevReview, [id]: newReview }));
    dispatch(addReview({ id, review: newReview }));
  };

  return (
    <div className="home-page container">
      <h1>Movie Watchlist</h1>
      <Link to="/add-movie" className="btn">Add New Movie</Link>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Genre: {movie.genre}</p>
            <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
            <button onClick={() => dispatch(toggleWatched(movie.id))}>
              {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
            </button>
            <Link to={`/edit-movie/${movie.id}`} className="btn">Edit</Link>
            <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>

            <div className="rating">
              <label>Rate this movie: </label>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= (rating[movie.id] || movie.rating || 0) ? 'star rated' : 'star'}
                  onClick={() => handleRatingChange(movie.id, star)}
                >
                  &#9733;
                </span>
              ))}
            </div>

            <div className="review">
              <label>Review: </label>
              <textarea
                value={review[movie.id] || ''}
                onChange={(e) => handleReviewChange(movie.id, e.target.value)}
              ></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
