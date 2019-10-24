import React from "react";

function CharacterCard(props) {
    return(
        <>
        <div className="card col-md-3">
            <div className="img-container">
                <ul>
                    <li>
                        <img alt={props.name} src={props.image}/>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default CharacterCard;