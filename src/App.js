import React from "react";
import "./App.scss";
import arrow from "./images/arrow-right.svg";

function App() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  Relieving the burden
                </div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">of disease caused</div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">by behavior.</div>
              </div>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              voluptatibus natus veniam dolor commodi laboriosam sint minus
              consequuntur optio, voluptatem nobis voluptatum, quibusdam, unde
              praesentium harum corrupti fugit ut ipsa.
            </p>
            <div className="button-row">
              <button className="explore-button">
                Explore{" "}
                <div className="arrow-icon">
                  <img src={arrow} alt="arrow" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-images"></div>
      </div>
    </div>
  );
}

export default App;
