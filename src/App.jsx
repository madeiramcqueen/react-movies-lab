import './App.css';
import { userState, useState } from 'react'
import LoginPage from './pages/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom'
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import ActorListPage from './pages/ActorListPage/ActorListPage'


function App() {
  const [user, setUser] = useState('Madeira')

  return (
    <div className="App">
      <h1>React Movies Home Page</h1>
      {user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
          <p>Welcome! You are signed in</p> </> :
        <LoginPage />}
    </div>
  );
}

export default App;
