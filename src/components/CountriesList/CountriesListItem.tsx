import React from "react";
import { Country } from "../../store/countries/types";

export default ({
  name,
  region,
  subregion,
  flag,
  population,
  capital
}: Country) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-128x128">
        <img src={flag} alt={`Flag of ${name}`} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong className="name">{name}</strong>{" "}
          <small className="subregion">{subregion}</small>
          {", "}
          <small className="region">{region}</small>
        </p>
        <p className="capital">Capital: {capital}</p>
        <p className="population">Population: {population.toLocaleString()}</p>
      </div>
    </div>
  </article>
);
