import React, {Component} from 'react';
import CharacterCard from "./components/CharacterCard/CharacterCard";
import friends from "./friends.json";
import Title from "./components/Title/title";

let correctGuess = 0; 
let bestScore = 0; 
let clickMessage = "Click on the character to gain points! Click twice, you lose!"

class App extends Component {

  state = {
    friends,
    correctGuess,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    const friends = this.state.friends;
    const clickedMatch = friends.filter(friend => friend.id === id);

    if (clickedMatch[0].clicked) {
      console.log("Correct Guess: " + correctGuess);
      console.log("Best Score: " + bestScore);

      correctGuess = 0; 
      clickMessage = "Darn it! You already clicked on this one!"

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false
      };
      
      this.setState({ clickMessage });
      this.setState({ correctGuess });
      this.setState({ friends });
    } else if (correctGuess < 11) {

      clickedMatch[0].clicked = true;

      correctGuess++;

      clickMessage = "Great choice!";

      if (correctGuess > bestScore) {
        bestScore = correctGuess;
        this.setState({ bestScore });
      }

      friends.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ friends });
      this.setState({ correctGuess });
      this.setState({ clickMessage });
    } else {
      clickedMatch[0].clicked = true;
      correctGuess = 0;

      clickMessage = "Well done! You've got them right!";

      bestScore = 12;

      this.setState({ bestScore });
      
      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }
      friends.sort(function(a, b) {return 0.5 - Math.random()});

      this.setState({ friends });
      this.setState({ correctGuess });
      this.setState({ clickMessage });
    }
  }

  render() {
    return(
      <>
      <div className="container">
          <Title>Clicky Game</Title>
      </div>
      <h3 className="scoreSummary">{this.state.clickMessage}</h3>
      <h3>Correct Guess: {this.state.correctGuess}</h3>
      <div className="container">
        <div className="row">
      {this.state.friends.map(friend => (
        <CharacterCard
        setClicked={this.setClicked} 
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        />
      ))}
        </div>
      </div>
      </>
    );
  };
}

  export default App;