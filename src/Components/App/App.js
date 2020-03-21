import React from 'react';
import './App.css';
import { images } from '../../images/images.js';

const App = () => {
  return (
    <main className="App">
      <div className="app-landing-page">
        <h1>John Adams</h1>
        <img src={images.triangleLogo} />
        <h3>Software Developer</h3>
        <button>down arrow</button>
      </div>
      <div className="app-navigation-page">
        <section>
          <h1>Web Design & Development</h1>
        </section>
        <section>
          <h1>Photography & Art</h1>
        </section>
      </div>
    </main>
  );
}

export default App;
