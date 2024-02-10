import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import bakcgroundSound from "./assets/mp3/homepage/backgroundSound.mp3";
import { Footer } from "./components/Footer";

const audio = new Audio(bakcgroundSound);

function App() {
  const [stopMusic, setStopMusic] = useState(false);
  const [loader, setLoader] = useState(false);

  const PlaySound = () => {
    if (!stopMusic) {
      audio.play();
      setStopMusic(!stopMusic);
    } else if (stopMusic) {
      audio.pause();
      setStopMusic(!stopMusic);
    }
  };

  const onHandleOptionConnect = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
    setTimeout(() => {
      const modal__global = document.querySelector(".connectModal");
      if (modal__global !== null) {
        modal__global.style.scale = "1";
      }
      setTimeout(() => {
        if (modal__global !== null) {
          modal__global.style.background = "#000000AA";
        }
      }, 200);
    }, 100);
  };

  return (
    <div className="global">
      <Header
        audio={audio}
        setStopMusic={setStopMusic}
        stopMusic={stopMusic}
        setLoader={setLoader}
        onHandleOptionConnect={onHandleOptionConnect}
        loader={loader}
        section="homepage"
      />
      <Homepage PlaySound={PlaySound} />
      <Footer
        stopMusic={stopMusic}
        setLoader={setLoader}
        onHandleOptionConnect={onHandleOptionConnect}
      />
    </div>
  );
}

export default App;
