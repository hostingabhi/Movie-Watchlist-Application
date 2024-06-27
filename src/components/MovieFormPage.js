import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../features/movies/moviesSlice';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieFormPage.css';

const MovieFormPage = () => {
  const { id } = useParams();
  const movieToEdit = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === id)
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (movieToEdit) {
      setTitle(movieToEdit.title);
      setDescription(movieToEdit.description);
      setReleaseYear(movieToEdit.releaseYear);
      setGenre(movieToEdit.genre);
    }
  }, [movieToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: movieToEdit ? movieToEdit.id : uuidv4(),
      title,
      description,
      releaseYear,
      genre,
      watched: false,
    };
    if (movieToEdit) {
      dispatch(editMovie({ id: movieToEdit.id, updatedMovie: newMovie }));
    } else {
      dispatch(addMovie(newMovie));
    }
    navigate('/');
  };

  return (
    <div className="movie-form-page container">
      <h2>{movieToEdit ? 'Edit Movie' : 'Add New Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">{movieToEdit ? 'Update Movie' : 'Add Movie'}</button>
      </form>
    </div>
  );
};

export default MovieFormPage;
