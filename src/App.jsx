import React, { createContext, useReducer } from 'react';
import { Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ReposPage } from './Pages/ReposPage';
import { Users } from './Pages/Users'
import LoginPage from './Pages/LoginPage'
import './App.css';
import { initialState, reducer } from "./store/reducer";


export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    {state.isLoggedIn ? (<header>
      <Link to='/'>Home</Link>
      <Link to='/repositories'>Repositories</Link>
      <Link to='/users'>Users</Link>
    </header>) : null}
    

    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repositories" element={<ReposPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<LoginPage />} /> 
        </Routes>
    </AuthContext.Provider>
    </>
  );
}

export default App;
