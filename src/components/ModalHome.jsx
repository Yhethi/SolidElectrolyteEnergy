import React from "react";
import { textos } from "./textos/Textos";
import "../assets/css/Modal.css";
import { MdOutlineClose } from "react-icons/md";

export const ModalHome = ({ option, setLoader }) => {
  const closeModal = () => {
    const modal__global = document.querySelector(".modal__global");
    modal__global.style.background = "transparent";
    setTimeout(() => {
      modal__global.style.scale = "0";
    }, 200);
  };

  return (
    <div className="modal__global">
      <div className="modal__card">
        <a className="close__modal" onClick={closeModal}>
          <MdOutlineClose />
        </a>
        {textos.map((item, key) => {
          if (item.name === option) {
            return (
              <>
                <span key={key} className="modal__card__texto">
                  {item.texto}
                </span>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
