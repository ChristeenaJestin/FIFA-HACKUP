const matchData = {
  competition: "FIFA WORLD CUP 2026",

  stadium: "Estadio Azteca, Mexico City",

  teamA: {
    name: "BRAZIL",
    logo: "https://flagcdn.com/br.svg",
    score: 3,
  },

  teamB: {
    name: "ARGENTINA",
    logo: "https://flagcdn.com/ar.svg",
    score: 1,
  },

  stats: [
    {
      title: "Possession",
      home: 62,
      away: 38,
      unit: "%",
    },
    {
      title: "Shots",
      home: 18,
      away: 9,
      unit: "",
    },
    {
      title: "Fouls",
      home: 10,
      away: 13,
      unit: "",
    },
  ],

  player: {
    name: "Vinicius Jr.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500",
    rating: 9.6,
    goals: 2,
    assists: 1,
    position: "LW",
  },

  standings: [
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
  ],

  timeline: [
    {
      minute: "12'",
      team: "Brazil",
      type: "goal",
      title: "Vinicius Jr. scores!",
    },
    {
      minute: "37'",
      team: "Argentina",
      type: "goal",
      title: "Lautaro Martinez equalizes",
    },
    {
      minute: "55'",
      team: "Brazil",
      type: "card",
      title: "Casemiro receives Yellow Card",
    },
    {
      minute: "71'",
      team: "Brazil",
      type: "goal",
      title: "Rodrygo puts Brazil ahead",
    },
    {
      minute: "90+3'",
      team: "Match",
      type: "finish",
      title: "Full Time",
    },
  ],
};

export default matchData;