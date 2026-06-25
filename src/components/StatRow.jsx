function StatRow({ title, home, away, unit = "" }) {

  const total = Number(home) + Number(away);
  const left = (home / total) * 100;

  return (
    <div className="stat-card">

      <div className="stat-top">

        <span className="home">
          {home}{unit}
        </span>

        <span className="title">
          {title}
        </span>

        <span className="away">
          {away}{unit}
        </span>

      </div>

      <div className="progress">

        <div
          className="progress-home"
          style={{ width: `${left}%` }}
        ></div>

        <div
          className="progress-away"
          style={{ width: `${100-left}%` }}
        ></div>

      </div>

    </div>
  );
}

export default StatRow;