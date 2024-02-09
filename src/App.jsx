import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import bakcgroundSound from "./assets/mp3/homepage/backgroundSound.mp3";

const audio = new Audio(bakcgroundSound);

function App() {
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
        section="homepage"
      />
      <Homepage PlaySound={PlaySound} />
    </div>
  );
}

export default App;
