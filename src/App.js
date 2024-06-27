import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { fetchMovies } from './features/movies/moviesSlice';
import HomePage from './components/HomePage';
import MovieFormPage from './components/MovieFormPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import './App.css';

// Component to fetch movies when the app loads
const FetchMoviesOnLoad = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return children;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <FetchMoviesOnLoad>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-movie" element={<MovieFormPage />} />
              <Route path="/edit-movie/:id" element={<MovieFormPage />} />
              <Route path="/movie/:id" element={<MovieDetailsPage />} />
            </Routes>
          </div>
        </FetchMoviesOnLoad>
      </Router>
    </Provider>
  );
}

export default App;
