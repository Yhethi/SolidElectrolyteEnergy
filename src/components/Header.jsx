import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/header/logo.png";
import "../assets/css/Header.css";
import { FaChevronDown } from "react-icons/fa";
import googleTr from "../assets/header/googleTr.png";
import { ModalHome } from "./ModalHome";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import emailjs from "@emailjs/browser";

export const Header = ({ audio, section }) => {
  const [option, setOption] = useState("");
  const [loader, setLoader] = useState(false);

  const onHandleOption = (texto) => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
    setOption(texto);
    setTimeout(() => {
      const modal__global = document.querySelector(".modal__global");
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

  useEffect(() => {
    if (section === "universe") {
      const universe__button = document.querySelector(".universe__button");
      universe__button.click();
    }
  }, []);

  const closeModalConnect = () => {
    const connectModal = document.querySelector(".connectModal");
    connectModal.style.background = "transparent";
    setTimeout(() => {
      connectModal.style.scale = "0";
    }, 200);
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_43y9534", "template_w3wwkre", form.current, {
        publicKey: "eCWIRCxFjtIoxUlIX",
      })
      .then(
        () => {
          alert("Tu mensaje ha sido enviado correctamente.");
          setName("");
          setEmail("");
          setMessage("");
          closeModalConnect();
        },
        (error) => {
          alert("Tu mensaje no se ha enviado correctamente.", error.text);
        }
      );
  };

  return (
    <div className="header__global">
      {loader && <ModalHome option={option} setLoader={setLoader} />}
      <div className="connectModal">
        <div className="connect__card">
          <a className="close__modalConnect" onClick={closeModalConnect}>
            <MdOutlineClose />
          </a>
          <div className="header__formulario">
            <h1 className="modalConnect__card__texto logoFont">Formulario</h1>
            <form ref={form} onSubmit={handleSubmit}>
              <label className="logoFont" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />

              <label className="logoFont" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

              <label className="logoFont" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
              <button className="logoFont" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt={logo}
            onClick={() => {
              audio.pause();
            }}
          />
        </Link>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-dark header__menu">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link logoFont"
                onClick={() => {
                  onHandleOptionConnect();
                  setLoader(true);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
