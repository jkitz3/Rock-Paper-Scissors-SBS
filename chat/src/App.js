import React from 'react';
import { Auth, Chat } from './pages';
import { Route, Routes } from 'react-router-dom';

export const App=()=> {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>  
          <Route path="/*" Component={Auth} />
          <Route path="/chat" Component={Chat} />
        </Routes>
      </div>
    </div>
  );
}

