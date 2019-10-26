import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card col-md-2" onClick={() => props.setClicked(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );

export default CharacterCard;