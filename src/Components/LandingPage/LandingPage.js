import React from 'react';
import './LandingPage.scss';
import { images } from '../../images/images.js';

export const LandingPage = () => {

  return (
    <main className="App">
      <div className="app-landing-page" >
        <h1 className="app-landing-name">John Adams</h1>
        <img className="app-landing-logo" src={images.triangleLogo} />
        <h3 className="app-landing-title">Software Developer</h3>
        <button className="app-landing-button">down arrow</button>
      </div>
      <div className="app-navigation-page">
        <section className="app-navigation-section">
          <h1 className="app-navigation-title">Web Design & Development</h1>
        </section>
        <section className="app-navigation-section">
          <h1 className="app-navigation-title">Photography & Art</h1>
        </section>
      </div>
    </main>
  )
}
