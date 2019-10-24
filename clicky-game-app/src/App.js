import React, {Component} from 'react';
import CharacterCard from "./components/CharacterCard/CharacterCard";
import friends from "./friends.json";


class App extends Component {

  state = {
    friends
  }

  render() {
    return(
      <>
      <h1>Friends</h1>
      {this.state.friends.map(friend => (
        <CharacterCard 
        name={friend.name}
        image={friend.image}
        id={friend.id}
        />
      ))}
      </>
    );
  };
}

  export default App;