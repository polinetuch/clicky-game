import React from 'react';
import "./CharacterCard.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name</strong> {props.name}
                    </li>
                    <li>
                        <strong>Name</strong> {props.name}
                    </li>
                    <li>
                        <strong>Name</strong> {props.name}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.shuffleCharacter(props.id)} className="shuffle"></span>
        </div>
    );
}

export default CharacterCard;