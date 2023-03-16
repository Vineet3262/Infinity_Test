import React, { useState } from 'react';
import './App.css';
import newImage from './image/1.3.jpg';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

function App() {
  const [firstBlockAnime, setFirstBlockAnime] = useState(false);
  const [secondBlockAnime, setSecondBlockAnime] = useState(false);
  const [imageTextAnime, setImageTextAnime] = useState(false)

  return (
    <div className="main">
      <div className='landingPage'>
        <div className='firstBlock' onMouseEnter={() => setFirstBlockAnime(true)} >
          <div className={`pera ${firstBlockAnime && "animate__animated animate__fadeInLeft"}`} style={{ color: "#2d869b" }}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum is a placeholder
              text commonly used to demonstrate the
              visual form of a document</p>
          </div>
          <div className={`img01 ${firstBlockAnime && "animate__animated animate__fadeInRight"}`}>
            <img src={newImage}></img>
          </div>
        </div>
        <div className='secondBlock' onMouseEnter={() => setSecondBlockAnime(true)} >
          <div className={`pera ${secondBlockAnime && "animate__animated animate__fadeInDown"}`}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum is a placeholder
              text commonly used to demonstrate the
              visual form of a document</p>
            <button className='learnMoreBtn'>Learn More</button>
          </div>
          <div className='slider'>
            <div className='sliderBtn'>
              <button><AiOutlineLeft /></button>
              <button><AiOutlineRight /></button>
            </div>
            <div className='bgImageWithText' onMouseEnter={() => setImageTextAnime(true)} onMouseLeave={() => setImageTextAnime(false)}>
              <div className='squre'></div>
              <div className={imageTextAnime && 'animate__animated animate__zoomIn'}>
                <h3 className='sliderText'>Lorem Ipsum</h3>
                <p>Lorem ipsum is a placeholder
                  text commonly used to demonstrate the
                  visual form of a document</p>
                <button className='learnMoreBtn'>Learn More</button>
              </div>
            </div>
            <div className='bgImage'>
            </div>
          </div>
        </div>
        <div className='boxBlock'>
          <div className='boxOne'>
            <button className='boxBtn'>Box 1</button>
          </div>
          <div className='boxTwo'>
            <button className='boxBtn'>Box 2</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
