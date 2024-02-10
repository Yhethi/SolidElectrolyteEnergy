import React from "react";
import "../assets/css/Footer.css";

export const Footer = ({ setLoader, loader, onHandleOptionConnect }) => {
  return (
    <div className="footer__tag">
      <a
        className="nav-link logoFont"
        onClick={() => {
          onHandleOptionConnect();
          setLoader(true);
        }}
      >
        emiliano@thesolidbatteries.com
      </a>
    </div>
  );
};
