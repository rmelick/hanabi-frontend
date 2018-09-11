import React from "react";
import Table from "@material-ui/core/Table/Table";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";

function playerToRow(player) {
  return (
    <TableRow key={player.id}>
      <TableCell component="th" scope="row">
        {player.name}</TableCell>
      <TableCell>
        {player.id}
      </TableCell>
      <TableCell>
        {player.type}
      </TableCell>
    </TableRow>
  );
}

export default function PlayersList(props) {
  return <div className="players-list">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Player Name</TableCell>
          <TableCell>Player Id</TableCell>
          <TableCell>Player Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.players.map(player => {return playerToRow(player)})}
      </TableBody>
    </Table>
    </div>

}