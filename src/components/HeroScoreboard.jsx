import matchData from "../data/matchData";
import { FaTrophy, FaRegCopy, FaMapMarkerAlt } from "react-icons/fa";

function HeroScoreboard() {
  const { competition, stadium, teamA, teamB } = matchData;

  const copyScore = () => {
    navigator.clipboard.writeText(
      `${teamA.name} ${teamA.score}-${teamB.score} ${teamB.name}`
    );
    alert("Score copied!");
  };

  return (
    <section className="hero">

      <div className="hero-card">

        <div className="competition">

          <FaTrophy />

          <div>

            <h2>{competition}</h2>

            <p>

              <FaMapMarkerAlt />

              {stadium}

            </p>

          </div>

        </div>

        <div className="hero-content">

          <div className="team left">

            <div className="team-logo">

              <img src={teamA.logo} alt={teamA.name} />

            </div>

            <h2>{teamA.name}</h2>

          </div>

          <div className="score-area">

            <div className="score">

              <span>{teamA.score}</span>

              <span className="colon">:</span>

              <span>{teamB.score}</span>

            </div>

            <div className="status">

              <span>FT</span>

              <small>FULL TIME</small>

            </div>

            <button className="copy-btn" onClick={copyScore}>

              <FaRegCopy />

              COPY SCORE

            </button>

          </div>

          <div className="team right">

            <div className="team-logo">

              <img src={teamB.logo} alt={teamB.name} />

            </div>

            <h2>{teamB.name}</h2>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroScoreboard;