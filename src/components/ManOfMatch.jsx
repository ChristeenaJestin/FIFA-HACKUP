import { useState } from "react";
import { motion } from "framer-motion";
import matchData from "../data/matchData";
import Modal from "./Modal";
import { FaFutbol, FaStar, FaRunning } from "react-icons/fa";

function ManOfMatch() {
  const [open, setOpen] = useState(false);
  const player = matchData.player;

  return (
    <motion.section
      className="motm-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="motm-card">
        <h2 className="motm-title">
          ⭐ MAN OF THE MATCH
        </h2>

        <div className="motm-content">

          <div className="motm-image">
            <motion.img
              src={player.image}
              alt={player.name}
              className="player-img"
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            />
          </div>

          <div className="motm-info">
            <h1>{player.name}</h1>

            <div className="rating">
              ⭐ {player.rating}
            </div>

            <div className="motm-stats">
              <div>
                <FaFutbol />
                <span>{player.goals} Goals</span>
              </div>

              <div>
                <FaStar />
                <span>{player.assists} Assists</span>
              </div>

              <div>
                <FaRunning />
                <span>{player.position}</span>
              </div>
            </div>

            <button
              className="motm-btn"
              onClick={() => setOpen(true)}
            >
              View Details
            </button>
          </div>

        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        player={player}
      />
    </motion.section>
  );
}

export default ManOfMatch;