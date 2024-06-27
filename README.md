# Movie Watchlist Application

Welcome to the Movie Watchlist application, a React.js and Redux-based project designed to manage your personal movie collection. This application allows you to add, edit, delete movies, track their watch status, and rate/review them.

## Key Features

- **Add Movies:** Add new movies to your watchlist with details such as title, description, release year, and genre.
  
- **Edit Movies:** Modify existing movie details including title, description, release year, and genre.

- **Delete Movies:** Remove movies from your watchlist.

- **Watch Status Management:** Mark movies as watched or unwatched to track your viewing progress.

- **Rating and Reviewing:** Rate movies on a scale of 1 to 5 stars and add textual reviews to share your opinions.

## Technologies Used

- **Frontend:** React.js, Redux for state management, CSS/SCSS for styling.
- **Backend:** Mock API using JSON server for data storage and retrieval.
- **Database:** JSON file for storing movie data.

## Getting Started

To get started with the Movie Watchlist application locally:

1. **Clone the repository:**
   ```
   git clone https://github.com/hostingabhi/Movie-Watchlist-Application
   cd movie-watchlist
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the JSON server for mock API:**
   ```
   json-server --watch db.json --port 5000
   ```
   This will start the JSON server to serve movie data from `db.json` at `http://localhost:5000/movies`.

4. **Start the React application:**
   ```
   npm start
   ```

5. **Open your browser:**
   ```
   Open http://localhost:3000 to view the application.
   ```

## Usage

- **Home Page:** Browse your movie collection, add new movies, and manage existing ones.
- **Add/Edit Movie:** Enter details for new movies or update existing ones.
- **Movie Details:** View comprehensive details of each movie, including ratings and reviews.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- React.js and Redux for frontend development.
- JSON server for mock API.
- Icons from FontAwesome.
