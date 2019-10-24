import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
  };

  render() {
    return (<h1>hello world</h1>)
  }

















  // state = {
  //   characters: characters,
  //   pickedCharacter: [],
  //   topScore: 0,
  //   alertMessage: ""
  // };

  // handlePicked = event => {
    
  //   const name = event.target.attribute.getNamedItem("name").value;
  //   this.shuffleCharacter();
  //   this.checkGuess(name, this.updateTopScore);
  // }

  // shuffleCharacter = () => {
  //   this.setState(this.state.characters = this.shuffleArray(this.state.characters))
  // }

  // shuffleArray = (a) => {
  //   var j, x, i;
  //   for (i = a.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = a[i];
  //     a[i] = a[j];
  //     a[j] = x;
  //   }
  //   return a;
  // }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
