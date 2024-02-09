import React, { useEffect, useState } from "react";
import "../assets/css/Body.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import playButton from "../assets/body/playButton.png";
import "../assets/scss/lettersAnimation.scss";
import videoHome from "../assets/mp4/homepage/homepage.mp4";
import { textos } from "./textos/Textos";
import Pitch_Deck from "../assets/pdf/homepage/Pitch_Deck.pdf";
import TECH from "../assets/pdf/homepage/TECH.pdf";


export const Homepage = ({ PlaySound }) => {

  return (
    <div className="body__global">
      <div className="body__video">
        <video
          className="backVideo"
          src={videoHome}
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* <img
        className="playButton"
        src={playButton}
        alt={playButton}
        onClick={PlaySound}
      /> */}
      {/* <div className="body__wallpaper"></div> */}
      <div className="body__components">
        <div className="lettersAnimation">
          <section
            className="sectionHuman"
            data-identity="Solid Electrolyte Energy Now"
          >
            <h1>
              <span style={{ whiteSpace: "nowrap" }}>SOLID ELECTROLYTE</span>
              <span style={{ whiteSpace: "nowrap" }}>FOR BATERIES</span>
            </h1>
            <blockquote className="d-flex">
              {/* <div className="d-flex">
                HUMAN
                <p style={{ color: "#FFF", marginLeft: "7px" }}>UNLEASH</p>
              </div> */}
              <span></span>
            </blockquote>
          </section>
          <div className="pen__lines-wrapper">
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
            <div className="pen__line"></div>
          </div>
        </div>
        {/* <Hero /> */}
      </div>
      <div className="body__pitchAndTech">
        <div className="body__pitchAndTechButtons">
          <button
            className="body__download__btn logoFont"
            onClick={() => {
              window.open(Pitch_Deck);
            }}
          >
            Pitch Deck
          </button>
          <button
            className="body__download__btn logoFont"
            onClick={() => {
              window.open(TECH);
            }}
          >
            The Tech
          </button>
        </div>
      </div>
    </div>
  );
};
