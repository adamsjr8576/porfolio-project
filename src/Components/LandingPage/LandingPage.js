import React, { useState } from 'react';
import './LandingPage.scss';
import { images } from '../../images/images.js';
export const LandingPage = () => {

  const scrollHandle = () => {
    window.scroll({
      top: 1400,
      left: 0,
      behavior: 'smooth'
    })
  }

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
        <h3 className="app-landing-title"><span>Software</span> <span>Developer</span></h3>
        <div className="arrow-container">
          <a className="bottom-link" onClick={scrollHandle}><img className="app-landing-arrow" src={images.downArrow}/></a>
        </div>
      </div>
      <div className="app-navigation-page">
        <a id="bottom"></a>
        <section className="app-navigation-section" style={{backgroundImage: `url(${images.webDevBg})`}}>
          <h1 className="app-navigation-title">Web Design & Development</h1>
        </section>
        <div className="line">
        </div>
        <section className="app-navigation-section" style={{backgroundImage: `url(${images.photoBg})`}}>
          <h1 className="app-navigation-title">Photography & Art</h1>
        </section>
      </div>
    </main>
  )
}
