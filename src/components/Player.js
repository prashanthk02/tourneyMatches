function Player(props) {
  let wins;
  if (props.wins === 0) {
        wins = <h2 className="zero">Currently with no wins :(</h2>
      } else if (props.wins === 1) {
        wins = <h2>Currently at 1 win</h2>
      } else {
        wins = <h2>Currently at {props.wins} wins</h2>
      }
  return (
    <article className="Player">
      <h1>
        {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
      </h1>
      {wins}
    </article>
  );
}

export default Player;