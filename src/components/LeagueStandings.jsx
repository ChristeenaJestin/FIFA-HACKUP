import { motion } from "framer-motion";



function LeagueStandings({ match }) {
  const teams = match.standings;
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