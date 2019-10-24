import React from 'react';
import "./CharacterCard.css";
import characters from "../characters.json";

function CharacterCard(props) {
    console.log(characters);
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                
            </div>
            <span onClick={() => props.shuffleCharacter(props.id)} className="shuffle"></span>
        </div>
    );
}

export default CharacterCard;