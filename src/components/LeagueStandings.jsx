import { motion } from "framer-motion";

const teams = [
  {
    pos: 1,
    name: "Brazil",
    flag: "https://flagcdn.com/br.svg",
    played: 3,
    won: 3,
    draw: 0,
    lost: 0,
    gf: 8,
    ga: 2,
    pts: 9,
  },
  {
    pos: 2,
    name: "Argentina",
    flag: "https://flagcdn.com/ar.svg",
    played: 3,
    won: 2,
    draw: 0,
    lost: 1,
    gf: 6,
    ga: 4,
    pts: 6,
  },
  {
    pos: 3,
    name: "Mexico",
    flag: "https://flagcdn.com/mx.svg",
    played: 3,
    won: 1,
    draw: 0,
    lost: 2,
    gf: 3,
    ga: 5,
    pts: 3,
  },
  {
    pos: 4,
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    played: 3,
    won: 0,
    draw: 0,
    lost: 3,
    gf: 2,
    ga: 8,
    pts: 0,
  },
];

function LeagueStandings() {
  return (
    <motion.section
      className="standings-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="standings-card">

        <h2 className="standings-title">
          🏆 GROUP STANDINGS

        </h2>

        <table className="standings-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>

          <tbody>

            {teams.map((team) => (
              <tr
                key={team.pos}
                className={team.pos === 1 ? "leader" : ""}
              >
                <td>
  {team.pos === 1
    ? "🥇"
    : team.pos === 2
    ? "🥈"
    : team.pos === 3
    ? "🥉"
    : team.pos}
</td>

                <td className="team-name">
                  <img src={team.flag} alt={team.name} />
                  {team.name}
                </td>

                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.gf}</td>
                <td>{team.ga}</td>
                <td>
  {team.gf - team.ga > 0
    ? `+${team.gf - team.ga}`
    : team.gf - team.ga}
</td>
                <td>
                <span className="points">{team.pts}</span>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </motion.section>
  );
}

export default LeagueStandings;