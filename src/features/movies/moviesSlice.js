import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('http://localhost:5000/movies');
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addReview(state, action) {
      const { id, review } = action.payload;
      const movie = state.movies.find((movie) => movie.id === id);
      if (movie) {
        if (!movie.reviews) {
          movie.reviews = [];
        }
        movie.reviews.push(review);
      }
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    toggleWatched: (state, action) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload);
      if (index !== -1) {
        state.movies[index].watched = !state.movies[index].watched;
      }
    },
    rateMovie: (state, action) => {
      const { id, rating } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id === id);
      if (index !== -1) {
        state.movies[index].rating = rating;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addMovie, editMovie, deleteMovie, toggleWatched, rateMovie, addReview } = moviesSlice.actions;

export default moviesSlice.reducer;
