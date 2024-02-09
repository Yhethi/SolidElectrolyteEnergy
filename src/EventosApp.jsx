import React, { useState } from "react";
import { Header } from "./components/Header";
import backgroundSound from "./assets/mp3/universo/backgroundSound.mp3";
import { Eventos } from "./components/Eventos";

const audio = new Audio(backgroundSound);

export const EventosApp = () => {
  const [stopMusic, setStopMusic] = useState(false);
  const PlaySound = () => {
    if (!stopMusic) {
      audio.play();
      setStopMusic(!stopMusic);
    } else if (stopMusic) {
      audio.pause();
      setStopMusic(!stopMusic);
    }
  };

  return (
    <div className="global">
      <Header
        audio={audio}
        setStopMusic={setStopMusic}
        stopMusic={stopMusic}
        section="universe"
      />
      <Eventos PlaySound={PlaySound} />
    </div>
  );
};
