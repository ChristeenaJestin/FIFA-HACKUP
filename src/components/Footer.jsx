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

        <p>
          Match Statistics Dashboard 
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
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