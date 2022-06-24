import React from 'react';
import MainPage from './MainPage';
import { Navigate } from 'react-router-dom';

import classes from './App.module.css'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className={classes.main}>
      <Routes>
          <Route path='/' element={<Navigate to='/main' />}/>
          <Route path='/main' element={<MainPage />}/>
          <Route path='/main/:id' element={<p>Переход к деталям</p>}/>
      </Routes>
    </div>
  );
}

export default App;
