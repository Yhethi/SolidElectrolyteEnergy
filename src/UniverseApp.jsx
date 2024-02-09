import React, { useState } from "react";
import { UniversePage } from "./components/UniversePage";
import { Header } from "./components/Header";
import backgroundSound from "./assets/mp3/universo/backgroundSound.mp3";

const audio = new Audio(backgroundSound);

export const UniverseApp = () => {
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
      <UniversePage PlaySound={PlaySound} />
    </div>
  );
};
