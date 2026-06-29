import StatRow from "./StatRow";
import { FaChartPie } from "react-icons/fa";

function Statistics({ match }) {
  return (
    <section className="statistics">

      <div className="stats-header">

        <div className="line"></div>

        <h2>
          <FaChartPie />
          MATCH STATISTICS
        </h2>

        <div className="line"></div>

      </div>

      <div className="stats-container">

        {match.stats.map((stat, index) => (
          <StatRow
            key={index}
            title={stat.title}
            home={stat.home}
            away={stat.away}
            unit={stat.unit}
          />
        ))}

      </div>

    </section>
  );
}

export default Statistics;