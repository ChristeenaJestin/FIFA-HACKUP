import { FaTrophy, FaGithub, FaHeart } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <div className="footer-content">

        <h2>
          <FaTrophy />
          FIFA HackUp {year}
        </h2>

        <p className="footer-subtitle">
          Interactive Match Analytics Dashboard
        </p>

        <small className="footer-tech">
          Built with React • Vite • Framer Motion
        </small>

        <small className="footer-note">
          FIFA HackUp '26 • Quarter Final Submission
        </small>

        <div className="footer-icons">

          <a
            href="https://github.com/ieeeccssociety803/FIFA-HACKUP-Mexico"
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository"
          >
            <FaGithub />
          </a>

          <FaHeart className="heart" />

        </div>

      </div>

    </footer>
  );
}

export default Footer;