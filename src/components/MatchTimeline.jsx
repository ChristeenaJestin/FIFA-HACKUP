import { motion } from "framer-motion";
import { FaFutbol, FaSquare, FaFlagCheckered } from "react-icons/fa";

const events = [
  {
    minute: "12'",
    team: "Brazil",
    icon: <FaFutbol />,
    title: "Vinicius Jr. scores!",
  },
  {
    minute: "37'",
    team: "Argentina",
    icon: <FaFutbol />,
    title: "Lautaro Martinez equalizes",
  },
  {
    minute: "55'",
    team: "Brazil",
    icon: <FaSquare />,
    title: "Casemiro receives Yellow Card",
  },
  {
    minute: "71'",
    team: "Brazil",
    icon: <FaFutbol />,
    title: "Rodrygo puts Brazil ahead",
  },
  {
    minute: "90+3'",
    team: "Match",
    icon: <FaFlagCheckered />,
    title: "Full Time",
  },
];

function MatchTimeline() {
  return (
    <motion.section
      className="timeline-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="timeline-card">

        <h2 className="timeline-title">
          📅 MATCH TIMELINE
        </h2>

        {events.map((event, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="timeline-minute">
              {event.minute}
            </div>

            <div className="timeline-icon">
              {event.icon}
            </div>

            <div className="timeline-content">
              <h4>{event.team}</h4>
              <p>{event.title}</p>
            </div>

          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}

export default MatchTimeline;