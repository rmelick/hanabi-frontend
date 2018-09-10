import './App.css';
import example_state from "./example_state";
import React from 'react'
import {GameContainer} from "./components/game/GameContainer";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import {LobbyContainer} from "./components/lobby/LobbyContainer";
import GameLobbyContainer from "./components/gamelobby/GameLobby";

console.log("example_state");
console.log(example_state);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const BasicExample = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/lobby">Lobby</Link></li>
        <li><Link to="/gamelobby">Game Lobby</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/game" component={GameContainer}/>
      <Route path="/lobby" component={LobbyContainer}/>
      <Route path="/gamelobby" component={GameLobbyContainer}/>
    </div>
  </BrowserRouter>
);
export default BasicExample


