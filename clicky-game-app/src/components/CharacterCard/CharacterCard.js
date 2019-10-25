import React from "react";
import "./CharacterCard.css";

// const CharacterCard = props => (
//     <div className="card" onClick={() => props.setClicked(props.id)}>
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//     </div>
//   );
  

function CharacterCard(props) {
    return(
        <>
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
        <span onClick={() => props.setClicked(props.image)}></span>
        </>
    );
}

export default CharacterCard;