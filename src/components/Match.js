
function Match(props) {
  let winner;
  if (props.winner === undefined) {
    winner = <h2>No winners yet!</h2>
  } else {
    winner = <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>
  }
  return(
    <article className="Match">
      <h1>{props.players[0]} <span>vs</span> {props.players[1]}</h1>
      {winner}
    </article>
  );
}

export default Match;