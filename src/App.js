import './App.css';
import React from 'react'
import {GameContainer} from "./components/game/GameContainer";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import {LobbyContainer} from "./components/lobby/LobbyContainer";
import uuidv4 from "uuid/v4";
import Chance from "chance";


const BasicExample = () => {
  if (!sessionStorage.getItem('player_id')) {
    sessionStorage.setItem('player_id', uuidv4());
    let chance = new Chance();
    sessionStorage.setItem('player_name', chance.name());
  }

  let player_id = sessionStorage.getItem('player_id');
  let player_name = sessionStorage.getItem('player_name');

  return <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Lobby</Link></li>
      </ul>

      <hr/>
      <Route
        exact path='/'
        component = {LobbyContainer}
      />
      <Route
        path='/game/:game_id'
        render={(props) => <GameContainer {...props} player_id={player_id} player_name={player_name} />}
      />
    </div>
  </BrowserRouter>
};
export default BasicExample


