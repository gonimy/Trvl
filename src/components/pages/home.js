import React from "react";

import "../../App.css";
import { Cards } from "../Cards";
import { Footer } from "../Footer";
import { MainSection } from "../mainSection";

export const Home = () => {
  return (
    <>
      <MainSection />
      <Cards/>
      <Footer/>
    </>
  );
};
