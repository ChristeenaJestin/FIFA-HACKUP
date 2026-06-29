import { motion } from "framer-motion";
import { FaFutbol, FaSquare, FaFlagCheckered } from "react-icons/fa";

function MatchTimeline({ match }) {

  const events = match.timeline;

  const getIcon = (type) => {
    switch (type) {
      case "goal":
        return <FaFutbol />;
      case "card":
        return <FaSquare />;
      case "finish":
        return <FaFlagCheckered />;
      default:
        return <FaFutbol />;
    }
  };

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
              {getIcon(event.type)}
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