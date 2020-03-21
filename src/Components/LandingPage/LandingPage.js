import React from 'react';
import './LandingPage.scss';
import { images } from '../../images/images.js';
// <img className="app-landing-logo" src={images.squareLogo} />
export const LandingPage = () => {

  return (
    <main className="App">
      <div className="app-landing-page" >
        <h1 className="app-landing-name"><span>John</span> <span>Adams</span></h1>
        <div className="triangle-container">
          <img className="app-landing-logo1" src={images.triangle} />
          <img className="app-landing-logo2" src={images.triangle} />
          <img className="app-landing-logo3" src={images.triangle} />
          <img className="app-landing-logo4" src={images.triangle} />
          <img className="app-landing-logo5" src={images.triangle} />
          <img className="app-landing-logo6" src={images.triangle} />
          <img className="app-landing-logo7" src={images.triangle} />
        </div>
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
