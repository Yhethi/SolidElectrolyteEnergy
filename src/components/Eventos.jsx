import React, { useEffect, useState } from "react";
import "../assets/css/Eventos.css";
import { AutoSliderEventos } from "./AutoSliderEventos";
import { Link } from "react-router-dom";

export const Eventos = ({ PlaySound }) => {
  const [loadSlider, setLoadSlider] = useState(true);

  useEffect(() => {
    setLoadSlider(false);
    setTimeout(() => {
      setLoadSlider(true);
    }, 100);
  }, []);

  return (
    <>
      <div className="eventos__global">
        {loadSlider && (
          <>
            <AutoSliderEventos />
          </>
        )}
        <div className="eventos__botones logoFont">
          <Link to="">Asóciate</Link>
          <Link to="">Obtén tu Ticket</Link>
          {/* <Link to="">APPLY TO SPEAK</Link>
          <Link to="">SPEAKERS</Link> */}
        </div>
      </div>
    </>
  );
};
