import { useState } from "react";

import Navbar from "../components/Navbar";
import HeroScoreboard from "../components/HeroScoreboard";
import Statistics from "../components/Statistics";
import ManOfMatch from "../components/ManOfMatch";
import LeagueStandings from "../components/LeagueStandings";
import MatchTimeline from "../components/MatchTimeline";
import Footer from "../components/Footer";

import matchData from "../data/matchData";

function Dashboard() {
  const [match, setMatch] = useState(matchData);

  return (
    <div className="dashboard">

      <Navbar />

      <HeroScoreboard
        match={match}
        setMatch={setMatch}
      />

      <Statistics match={match} />

      <ManOfMatch match={match} />

      <LeagueStandings match={match} />

      <MatchTimeline match={match} />

      <Footer />

    </div>
  );
}

export default Dashboard;