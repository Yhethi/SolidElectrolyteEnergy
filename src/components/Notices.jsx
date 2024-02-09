import React from "react";
import "../assets/css/Notices.css";
import { Notice } from "./Notice";
import brave from "../assets/notices/brave.svg";
import circle from "../assets/notices/circle.svg";
import discord from "../assets/notices/discord.svg";
import google from "../assets/notices/google.svg";
import jump from "../assets/notices/jump.svg";
import lollapalooza from "../assets/notices/lollapalooza.svg";
import magiceden from "../assets/notices/magiceden.svg";
import meta from "../assets/notices/meta.svg";
import shopify from "../assets/notices/shopify.svg";
import stripe from "../assets/notices/stripe.svg";

export const Notices = () => {
  const imgs = [
    {
      name: "",
      src: brave,
    },
    {
      name: "",
      src: circle,
    },
    {
      name: "",
      src: discord,
    },
    {
      name: "",
      src: google,
    },
    {
      name: "",
      src: jump,
    },
    {
      name: "",
      src: lollapalooza,
    },
    {
      name: "",
      src: magiceden,
    },
    {
      name: "",
      src: meta,
    },
    {
      name: "",
      src: shopify,
    },
    {
      name: "",
      src: stripe,
    },
  ];

  return (
    <div className="notices__global">
      {/* <p className="text">
        POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
      </p> */}
      <div className="notices__scrollable">
        {imgs.map((img, key) => {
          return (
            <div key={key}>
              <Notice img={img.src} name={img.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
