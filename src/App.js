import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "./App.scss";
//assets
import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
  let app = useRef(null);
  let images = useRef(null); //refrencing to parent element of boy and girl image and creating vars in useEffect
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // images varibales
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // content variables
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];
    // app (.hero) becomes visible after hero is finished loading to avoid "starting flash"
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    //images animation
    tl.from(
      girlImage,
      1.2,
      {
        y: 1280,
        ease: Power3.easeOut,
      },
      "Start" //syncing the timeline
    )
      .from(
        girlImage.lastElementChild,
        2,
        {
          scale: 1.6,
          ease: Power3.easeOut,
        },
        0.2
      )

      .from(
        boyImage,
        1.2,
        {
          y: 1280,
          ease: Power3.easeOut,
        },
        0.2
      )
      .from(
        boyImage.lastElementChild,
        2,
        {
          scale: 1.6,
          ease: Power3.easeOut,
        },
        0.2
      );

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]); //addting [tl] so useEffect is dependent to timeline
  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
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
          <div className="hero-images">
            <div className="hero-images-inner" ref={(el) => (images = el)}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
