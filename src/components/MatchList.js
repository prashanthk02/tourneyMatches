import matchData from "../data/matchData";
import Match from "./Match";

function MatchList(props) {
  const matches = matchData.map(match => {
    return (
    <Match
      key={match.matchNumber}
      players={match.players}
      winner={match.winner}
      scoreDifference={match.scoreDifference}
      />
    );
  });

  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;