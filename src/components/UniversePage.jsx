import React, { useEffect, useRef, useState } from "react";
import "../assets/css/Universe.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import playButton from "../assets/body/playButton.png";
import Aetheria from "../assets/universos/1_Aetheria.png";
import Celestis from "../assets/universos/2_Celestis.png";
import Temporalis from "../assets/universos/3_Temporalis.png";
import Spectra from "../assets/universos/4_Spectra.png";
import Etherium from "../assets/universos/5_Etherium.png";
import ARCANUM from "../assets/universos/6_ARCANUM.png";
import INFINITUM from "../assets/universos/7_INFINITUM.png";
import OBSCURA from "../assets/universos/8_OBSCURA.png";
import HARMONIA from "../assets/universos/9_HARMONIA.png";
import { textos } from "./textos/Textos";

export const UniversePage = ({ PlaySound }) => {
  const itemsRef = useRef();

  useEffect(() => {
    // const wallpapers = document.querySelector(".universes__wallpaper");
    // wallpapers.addEventListener("wheel", (event) => {
    //   event.preventDefault();
    //   console.log(event.deltaY);
    //   wallpapers.scrollBy({
    //     left: event.deltaY < 0 ? -30 : 30,
    //   });
    // });
  }, []);

  useEffect(() => {
    const universe__texto = document.querySelector(".universe__texto");
    universe__texto.addEventListener("click", () => {
      universe__texto.style.scale = "0";
    });
  }, []);

  return (
    <div className="universe__global">
      <img
        className="playButton"
        src={playButton}
        alt={playButton}
        onClick={PlaySound}
      />
      {/* <div className="universe__wallpaper"></div> */}
      <div className="universes__wallpaper">
        {/* <div className="universe__texto">
          <h1 className="universe__letters">{textos[2].texto}</h1>
        </div> */}
        {/* <div className="universe__container__wallpaper">
          <img src={Aetheria} alt={Aetheria} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={Celestis} alt={Celestis} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={Temporalis} alt={Temporalis} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={Spectra} alt={Spectra} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={Etherium} alt={Etherium} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={ARCANUM} alt={ARCANUM} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={INFINITUM} alt={INFINITUM} />
        </div>
        <div className="universe__container__wallpaper">
          <img src={OBSCURA} alt={OBSCURA} />
        </div> */}
        <div className="universe__container__wallpaper">
          <img src={HARMONIA} alt={HARMONIA} />
        </div>
      </div>
      <div className="universe__texto">
        <h1 className="universe__letters">{textos[2].texto}</h1>
      </div>
      <div className="universe__components">
        <Hero />
      </div>
    </div>
  );
};
