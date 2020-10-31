import React from "react";
import "../../App.css";
import { Card } from "../card";
import { Footer } from "../Footer";
import "./partners.css";

export default function Products() {
  return (
    <>
      <div className="main">
        <h1>Our Partners</h1>
        <div className="main__container">
          <div className="main__wrapper">
            <ul className="cards__item">
              <Card src="/images/11.jfif" text="Capella Ubud" />
              <Card src="images/12.jfif" text="Hotel Amparo" />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
