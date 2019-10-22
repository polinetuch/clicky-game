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
                        <strong>Name</strong> {props.name[0]}
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name[1]}
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name[2]}
                    </li>
                    <li>
                        <strong>Name</strong> {props.name[3]}
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name[4]}
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name[5]}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.shuffleCharacter(props.id)} className="shuffle"></span>
        </div>
    );
}

export default CharacterCard;