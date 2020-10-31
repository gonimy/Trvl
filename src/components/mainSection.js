import React, { useRef } from "react";

import { Button } from "./button";
import "./mainSection.css";

export const MainSection = () => {
  return (
    <div className="main-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/sign-up"
        >
          GET STARTED
        </Button>
        <a
          className="btn--large btns btn--primary"
          href="  https://www.youtube.com/watch?v=Ffn7jsmpG6Q&list=RDCv8rfMgXEcg&index=2&ab_channel=TheSynaptik"
        >
          GREAT STORIES <i className="far fa-play-circle" />
        </a>
      </div>
    </div>
  );
};
