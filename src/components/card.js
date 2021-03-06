import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = (props) => {
  return (
    <>
      <li className="cards__items">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              alt="Travel Image"
              src={props.src}
              className="cards__item__img"
            />
          </figure>

          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
