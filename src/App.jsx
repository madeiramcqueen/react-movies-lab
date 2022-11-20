import './App.css';
import { userState, useState } from 'react'
import { Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <div className="App">
        <h1>React Movies Home Page</h1>
        {user ?
          <p>Welcome! You are signed in</p> :
          <LoginPage />}
      </div> </>
  );
}

export default App;
