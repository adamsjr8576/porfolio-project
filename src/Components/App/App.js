import React from 'react';
import './App.scss';
import { images } from '../../images/images.js';
import { Route } from 'react-router-dom'
import { LandingPage } from '../LandingPage/LandingPage';

const App = () => {
  return (
    <div className="parent-div">
      <Route exact path='/' render={() => {
        return <LandingPage />
      }}
      />
    </div>
  );
}

export default App;
