import React from "react";
import "../../App.css";
import { Button } from "../button";

import { Footer } from "../Footer";
import "./services.css";

export default function Services() {
  return (
    <>
      <div className="container">
        <div className="text__container">
          <h1>Well There is only one boss GUESS WHO ?</h1>
          <p>
            Hospitality exists when you believe the other person is on your side
          </p>
        </div>
        <div className="image__container">
          <img src="/images/img-8.jpg" alt="hotel pic" className="img_wrap" />
        </div>
      </div>

      <Footer />
    </>
  );
}
