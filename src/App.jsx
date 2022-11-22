import './App.css';
import { useState } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import ActorListPage from './pages/ActorListPage/ActorListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import { movies } from "./data"


function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <h1>React Movies</h1>
      {user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />}
            />
          </Routes>
          <p>Welcome {user}! You are signed in.</p> </> :
        <LoginPage setUser={setUser} />}
    </div>
  );
}

export default App;
