import React from "react";
import Table from "@material-ui/core/Table/Table";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Button from "@material-ui/core/Button/Button";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Link} from "react-router-dom";

function gameToRow(game) {
  return (
    <TableRow key={game.game_id}>
      <TableCell component="th" scope="row">
        {game.game_id}
      </TableCell>
      <TableCell>{game.status}</TableCell>
      <TableCell numeric>{game.num_players}</TableCell>
      <TableCell>
        <Link to={`/game/${game.game_id}`}>View Game Lobby</Link>
      </TableCell>
    </TableRow>
  );
}

export function GamesList(props) {
  return <div className="games-list">
    <Button variant="contained" color="primary" onClick={props.newGameFunction}>New Game</Button>
    <Button variant="contained" color="primary" onClick={props.refreshFunction}>Refresh Games</Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Game Id</TableCell>
          <TableCell>Status</TableCell>
          <TableCell numeric>Current Players</TableCell>
          <TableCell>Join</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.games.map(game => {return gameToRow(game)})}
      </TableBody>
    </Table>
    </div>

}