import {
  FaFutbol,
  FaSyncAlt,
  FaShareAlt,
  FaDownload,
  FaMoon
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <div className="logo-circle">
          <FaFutbol />
        </div>

        <div>
          <h1>FIFA</h1>
          <span>MATCH CENTER</span>
        </div>

      </div>

      <div className="nav-actions">

        <button>
          <FaSyncAlt />
          Refresh
        </button>

        <button>
          <FaShareAlt />
          Share
        </button>

        <button>
          <FaDownload />
          Download
        </button>

        <button>
          <FaMoon />
          Dark
        </button>

      </div>

    </header>
  );
}

export default Navbar;