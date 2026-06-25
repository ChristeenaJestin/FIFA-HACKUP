import { FaTimes, FaFutbol, FaStar, FaRunning } from "react-icons/fa";

function Modal({ open, onClose, player }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <img
          src={player.image}
          alt={player.name}
          className="modal-image"
        />

        <h2>{player.name}</h2>

        <p className="modal-rating">
          ⭐ Rating : {player.rating}
        </p>

        <div className="modal-stats">

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
          className="modal-ok"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default Modal;