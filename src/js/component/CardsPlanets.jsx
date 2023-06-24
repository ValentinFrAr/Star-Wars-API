import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const CardsPlanets = (props) => {
  const { store, actions } = useContext(Context);
  const planetStore = store.planet.filter(
    (planet) => planet.name == props.planet.name
  );

  useEffect(() => actions.planetDescription(props.planet.url), []);

  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://media.paperblog.fr/i/623/6232954/personnage-prefere-fans-star-wars-votez-maint-L-YCAQwN.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.planet.name}</h5>
          {planetStore[0] ? (
            <div>
              <p className="card-text">Terrain: {planetStore[0].terrain}</p>
              <p className="card-text">Gravity: {planetStore[0].gravity}</p>
              <p className="card-text">
                Population: {planetStore[0].population}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-center">
            <Link
              to={"/single/" + props.planet.uid}
              className="more"
              data={planetStore}
            >
              <button className="btn btn-more">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPlanets;