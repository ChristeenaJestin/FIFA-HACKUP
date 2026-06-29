import { FaTrophy, FaRegCopy, FaMapMarkerAlt } from "react-icons/fa";

function HeroScoreboard({ match, setMatch }) {

  const { competition, stadium, teamA, teamB } = match;

  const copyScore = () => {
    navigator.clipboard.writeText(
      `${teamA.name} ${teamA.score}-${teamB.score} ${teamB.name}`
    );
    alert("Score copied!");
  };

  const simulateFinalWhistle = () => {

    setMatch({

      ...match,

      teamA: {
        ...match.teamA,
        score: 4
      },

      teamB: {
        ...match.teamB,
        score: 2
      },

      stats: [
        {
          title: "Possession",
          home: 58,
          away: 42,
          unit: "%"
        },
        {
          title: "Shots",
          home: 22,
          away: 12,
          unit: ""
        },
        {
          title: "Fouls",
          home: 11,
          away: 15,
          unit: ""
        }
      ],

      player: {
        name: "Vinicius Jr.",
        image:
          "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500",
        rating: 9.9,
        goals: 3,
        assists: 1,
        position: "LW"
      }

    });

    alert("🏁 Final Whistle! Match Updated.");

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

          <div className="team">

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

            <button
              className="copy-btn"
              onClick={copyScore}
            >
              <FaRegCopy />
              COPY SCORE
            </button>

            <button
              className="copy-btn"
              onClick={simulateFinalWhistle}
              style={{ marginTop: "15px" }}
            >
              🏁 SIMULATE FINAL WHISTLE
            </button>

          </div>

          <div className="team">

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